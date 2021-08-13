
class Configuration {

    private static instance: Configuration;
   
    public static getInstance(): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration();
        }
        return Configuration.instance;
    }

    public static getProp1(): string {
        return 'prop1';
    }
    public static getProp2(): string {
        return 'prop1';
    }
    public static  initConfiguration(): void {
        console.log('Se inicia SDK');
        // throw new Error('Method not implemented.');
    }

}

export default Configuration;
