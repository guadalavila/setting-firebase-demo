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

export function initFirebase(firebaseConfig : FirebaseConfiguration): void {
    firebase.initializeApp(firebaseConfig);
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getData() {
    const remoteConfig = firebase.remoteConfig();
    return remoteConfig.getAll();
}
