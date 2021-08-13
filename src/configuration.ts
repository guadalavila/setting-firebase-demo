/* eslint-disable @typescript-eslint/no-empty-function */
class Configuration {
    constructor() {}

    method1() {
        return 'prop1';
    }

    method2() {
        return 'prop2';
    }
}

const configurationInstance = new Configuration();

Object.freeze(configurationInstance);
export default configurationInstance;

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
