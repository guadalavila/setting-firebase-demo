import firebase from 'firebase/app';
import 'firebase/remote-config';
import { FirebaseConfiguration } from './models/FirebaseConfiguration';
import { ACCOUNT_KEY, EXPLORE_B2B_KEY, EXPLORE_B2C_KEY, PORTABILITY_ENABLED, PROFILE_KEY, SUPPORT_KEY, SUPPORT_TEXT } from './utils/const';

class ConfigurationApp {
    constructor() {}

    initConfig(firebaseConfig: FirebaseConfiguration) {
        try {
            if (!firebase.apps.length) {
                firebase.initializeApp(firebaseConfig);
            }
        } catch (err) {
            throw new Error('Cant initConfig: '+ err.message);
        }
    }

    getUpdateExploreB2C(): Promise<string> {
        const value = this.getStringValue(EXPLORE_B2C_KEY);
        return value;
    }

    getUpdateExploreB2B(): Promise<string> {
        const value = this.getStringValue(EXPLORE_B2B_KEY);
        return value;
    }

    getUpdateAccount(): Promise<string> {
        const value = this.getStringValue(ACCOUNT_KEY);
        return value;
    }

    getUpdateProfile(): Promise<string> {
        const value = this.getStringValue(PROFILE_KEY);
        return value;
    }

    getUpdateSupport(): Promise<string> {
        const value = this.getStringValue(SUPPORT_KEY);
        return value;
    }

    getTextSupport(): Promise<string> {
        const value = this.getStringValue(SUPPORT_TEXT);
        return value;
    }

    getPortabilityEnabled(): Promise<boolean> {
        const value = this.getBooleanValue(PORTABILITY_ENABLED);
        return value;
    }

    private async getStringValue(key: string): Promise<string> {
        return new Promise((resolve) => {
            const remoteConfig = firebase.remoteConfig();
            remoteConfig.settings = {
                minimumFetchIntervalMillis: 500,
                fetchTimeoutMillis: 3600,
            };
            remoteConfig.fetchAndActivate().then(() => {
                const value = remoteConfig.getValue(key).asString();
                resolve(value);
            });
        });
    }

    private async getBooleanValue(key: string): Promise<boolean> {
        return new Promise((resolve) => {
            const remoteConfig = firebase.remoteConfig();
            remoteConfig.settings = {
                minimumFetchIntervalMillis: 500,
                fetchTimeoutMillis: 3600,
            };
            remoteConfig.fetchAndActivate().then(() => {
                const value = remoteConfig.getValue(key).asBoolean();
                resolve(value);
            });
        });
    }
}

const configuration = new ConfigurationApp();

Object.freeze(configuration);
export default configuration;
