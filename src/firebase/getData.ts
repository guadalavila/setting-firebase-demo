import firebase from 'firebase/app';


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getData() {
    const remoteConfig = firebase.remoteConfig();
    return remoteConfig.getAll();
}
