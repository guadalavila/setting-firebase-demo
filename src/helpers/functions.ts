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

export function fetchAllData(firebaseConfig: FirebaseConfiguration) {
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

export function fetchStringValue(firebaseConfig: FirebaseConfiguration, key: string) {
    if (typeof key === 'string') {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
            const remoteConfig = firebase.remoteConfig();
            remoteConfig
                .fetchAndActivate()
                .then(() => {
                    const value = remoteConfig.getValue(key).asString();
                    console.log(value);
                    return value;
                })
                .catch(() => {
                    throw new Error('Failed to fetch and activate remote config values.');
                });
        } catch (err) {
            throw new Error(err.message);
        }
    } else {
        throw new Error('"key" must be a string value.');
    }
}




