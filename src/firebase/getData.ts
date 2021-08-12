import firebase from 'firebase/app';
import 'firebase/remote-config';
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
export function getAllData(firebaseConfig: FirebaseConfiguration) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const remoteConfig =  firebase.remoteConfig();
    console.log(remoteConfig.getAll());
    return remoteConfig.getAll();
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function fetchKey(firebaseConfig: FirebaseConfiguration, key: string) {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const remoteConfig =  firebase.remoteConfig();
    return remoteConfig.getValue(key);
}


