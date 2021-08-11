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
    console.log(firebase);
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}