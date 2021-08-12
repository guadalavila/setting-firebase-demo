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
type TypeKey = {
    type: 'boolean' | 'string' | 'number';
};

export function fetchValue(firebaseConfig: FirebaseConfiguration, key: string, typeKey: TypeKey) {
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
