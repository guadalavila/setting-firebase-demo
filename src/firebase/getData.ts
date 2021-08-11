/* eslint-disable no-console */
import firebase from 'firebase/app';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function getData() {
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.defaultConfig = {
        welcome_message: 'Welcome',
    };
    remoteConfig
        .fetchAndActivate()
        .then((data) => {
            console.log('hola');
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}
