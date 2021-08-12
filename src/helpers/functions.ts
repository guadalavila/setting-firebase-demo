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

export function fetchStringValue(firebaseConfig: FirebaseConfiguration, key: string): Promise<string>{
    return new Promise((resolve, reject) => {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const remoteConfig = firebase.remoteConfig();
            remoteConfig
                .fetchAndActivate()
                .then(() => {
                    const value: string = remoteConfig.getValue(key).asString();
                    resolve(value);
                })
                .catch(() => {
                    reject('Failed to fetch and activate remote config values.');
                });
        } catch (err) {
            reject(err.message);
        }
    });
}

export function fetchBooleanValue(firebaseConfig: FirebaseConfiguration, key: string): Promise<boolean>{
    return new Promise((resolve, reject) => {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const remoteConfig = firebase.remoteConfig();
            remoteConfig
                .fetchAndActivate()
                .then(() => {
                    const value: boolean = remoteConfig.getValue(key).asBoolean();
                    resolve(value);
                })
                .catch(() => {
                    reject('Failed to fetch and activate remote config boolean value.');
                });
        } catch (err) {
            reject(err.message);
        }
    });
}

export function fetchNumberValue(firebaseConfig: FirebaseConfiguration, key: string): Promise<number>{
    return new Promise((resolve, reject) => {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const remoteConfig = firebase.remoteConfig();
            remoteConfig
                .fetchAndActivate()
                .then(() => {
                    const value: number = remoteConfig.getValue(key).asNumber();
                    resolve(value);
                })
                .catch(() => {
                    reject('Failed to fetch and activate remote config number value.');
                });
        } catch (err) {
            reject(err.message);
        }
    });
}