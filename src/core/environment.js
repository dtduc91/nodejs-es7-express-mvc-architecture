/*globals Promise:true*/
/*globals __dirname:true*/
import BaseObject from '../base/base_object';
import _ from '../utils/underscore';
import path from 'path';

class Environment extends BaseObject {
    init(args) {
        super.init(args);

        this.loadConfiguration();
        this.loadModules();
    }

    async loadConfiguration() {
        try {
            this._config = _.safeParseJSON(await _.readFileAync(path.resolve(__dirname, '../../config/settings.json'), 'utf-8'), {});
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }
    
    
    async loadModules() {
        this._routes = await this.__loadRoutesModulesAsync();

        console.log(this._routes);

        this._routes.forEach(route => {
           console.log('Routtttte => ', route);
        });
    }


    async __loadRoutesModulesAsync() {
        console.log('Test');
        try {
            return await _.readdirAsync(path.resolve(__dirname, '../routes'));
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }


}

export default Environment;