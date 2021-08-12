/* eslint-disable no-console */
import firebase from 'firebase/app';
interface FirebaseConfiguration {
    apiKey: string,
    authDomain: string,
    projectId: string,
    storageBucket: string,
    messagingSenderId: string,
    appId: string,
    measurementId: string,
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getData(firebaseConfig: FirebaseConfiguration) {
    // const remoteConfig = firebase.remoteConfig();
    // remoteConfig.defaultConfig = {
    //     welcome_message: 'Welcome',
    // };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const remoteConfig = firebase.remoteConfig();

    remoteConfig.settings = {
        minimumFetchIntervalMillis: 3600,
        fetchTimeoutMillis: 500
    };
    firebase
        .remoteConfig()
        .fetchAndActivate()
        .then((data) => {
            console.log('hola');
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log('errr');
            console.log(err);
            throw err;
        });
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function fetchKey(firebaseConfig: FirebaseConfiguration, key: string) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    await firebase.remoteConfig().fetchAndActivate();
    return firebase.remoteConfig().getString(key);
}


