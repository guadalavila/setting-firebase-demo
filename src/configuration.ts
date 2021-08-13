/* eslint-disable @typescript-eslint/no-empty-function */
class Configuration {
    constructor() {}

    getUpdateDescubriB2C(): string {
        return '20210810';
    }

    getUpdateDescubriB2B(): string {
        return '20210812';
    }
}

const configInstance = new Configuration();

Object.freeze(configInstance);
export default configInstance;

// class Configuration {

//     private static instance: Configuration;

//     // eslint-disable-next-line @typescript-eslint/no-empty-function
//     private constructor() { }

//     public static getInstance(): Configuration {
//         if (!Configuration.instance) {
//             Configuration.instance = new Configuration();
//         }
//         return Configuration.instance;
//     }

//     public static getProp1(): string {
//         return 'prop1';
//     }
//     public static getProp2(): string {
//         return 'prop1';
//     }
//     public static  initConfiguration(): void {
//         console.log('Se inicia SDK');
//         // throw new Error('Method not implemented.');
//     }

// }

// export default configurationInstance;
