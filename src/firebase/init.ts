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
    // eslint-disable-next-line no-undef
    console.log(firebase.apps);
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}