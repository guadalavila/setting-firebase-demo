/* eslint-disable @typescript-eslint/no-empty-function */
import firebase from 'firebase/app';
import 'firebase/remote-config';
import { FirebaseConfiguration } from './models/FirebaseConfiguration';
import { ACCOUNT_KEY, PROFILE_KEY } from './utils/const';

class Configuration {
    constructor() {}

    private remoteConfig: any;

    initConfig(firebaseConfig: FirebaseConfiguration) {
        console.log('inicializando Config');
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            this.remoteConfig = firebase.remoteConfig();
            this.remoteConfig.settings = {
                minimumFetchIntervalMillis: 500,
                fetchTimeoutMillis: 3600,
            };
        } catch (err) {
            console.log(err.message);
        }
    }

    getUpdateExploreB2C(): string {
        return '20210810';
    }

    getUpdateExploreB2B(): string {
        return '20210812';
    }

    getUpdateAccount(): string {
        return this.getStringValue(ACCOUNT_KEY);
    }

    getUpdateProfile(): string {
        return this.getStringValue(PROFILE_KEY);
    }

    getUpdateSupport(): string {
        return '0';
    }

    private getStringValue(key: string): string {
        console.log('se quiere recuperar: ' + key);
        let value = '';
        this.remoteConfig.fetchAndActivate().then(() => {
            value = this.remoteConfig.getValue(key).asString();
        });
        return value;
    }
}

const configInstance = new Configuration();

Object.freeze(configInstance);
export default configInstance;

// class Configuration {

//     private static instance: Configuration;

//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     private constructor() { }

//     public static getInstance(): Configuration {
//         if (!Configuration.instance) {
//             Configuration.instance = new Configuration();
//         }
//         return Configuration.instance;
//     }

//     public static getProp1(): string {
//         return 'prop1';
//     }
//     public static getProp2(): string {
//         return 'prop1';
//     }
//     public static  initConfiguration(): void {
//         console.log('Se inicia SDK');
//         // throw new Error('Method not implemented.');
//     }

// }

// export default configurationInstance;
