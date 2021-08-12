import firebase from 'firebase/app';
import 'firebase/remote-config';

interface FirebaseConfiguration {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

export function fetchAllData(firebaseConfig: FirebaseConfiguration): any {
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const remoteConfig = firebase.remoteConfig();
        remoteConfig
            .fetchAndActivate()
            .then(() => {
                const remoteConfigData = remoteConfig.getAll();
                console.log(remoteConfigData);
                return remoteConfigData;
            })
            .catch(() => {
                throw new Error('Failed to fetch and activate remote config values.');
            });
    } catch (err) {
        throw new Error(err.message);
    }
}
type TypeKey = {
    type: 'boolean' | 'string' | 'number';
};


export function fetchValue(firebaseConfig: FirebaseConfiguration, key: string, typeKey: TypeKey){
    try {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        const remoteConfig = firebase.remoteConfig();
        remoteConfig
            .fetchAndActivate()
            .then(() => {
                console.log(remoteConfig.getValue(key));
                switch (typeKey.type) {
                    case 'string':
                        return remoteConfig.getValue(key).asString();
                    case 'boolean':
                        return remoteConfig.getValue(key).asBoolean();
                    case 'number':
                        return remoteConfig.getValue(key).asNumber();
                    default:
                        return '';
                }
            })
            .catch(() => {
                throw new Error('Failed to fetch and activate remote config values.');
            });
    } catch (err) {
        throw new Error(err.message);
    }
}


export function fetchValue2(firebaseConfig: FirebaseConfiguration, key: string, typeKey: TypeKey): Promise<string | number | boolean>{
    return new Promise((resolve, reject) => {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const remoteConfig = firebase.remoteConfig();
            remoteConfig
                .fetchAndActivate()
                .then(() => {
                    console.log(remoteConfig.getValue(key));
                    switch (typeKey.type) {
                        case 'string':{
                            const value: string = remoteConfig.getValue(key).asString();
                            console.log(value);
                             resolve(value);
                            break;
                        }
                        case 'boolean':{
                            const value: boolean = remoteConfig.getValue(key).asBoolean();
                            console.log(value);
                            resolve(value);
                            break;
                        }
                        case 'number':{
                            const value: number = remoteConfig.getValue(key).asNumber();
                            console.log(value);
                            resolve(value);
                            break;
                        }
                        default:
                            console.log('default');
                            resolve('');
                            break;
                    }
                })
                .catch(() => {
                    reject('Failed to fetch and activate remote config values.');
                });
        } catch (err) {
            reject(err.message);
        }
    });
}