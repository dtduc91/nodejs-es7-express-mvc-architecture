/*globals Promise:true*/
/*globals __dirname:true*/
import BaseObject from '../base/base_object';
import _ from '../utils/underscore';
import path from 'path';

class Environment extends BaseObject {
    init(args) {
        super.init(args);

        this._module = [];

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
        this._handlers = await this.__loadHandlerModulesAsync();

        let modules = this._routes.concat(this._handlers);

        modules.forEach(moduleFileName => {
            let moduleFileNameSplitByUnderScore = moduleFileName.split('_');

            this._module.push(require('../' + moduleFileNameSplitByUnderScore[moduleFileNameSplitByUnderScore.length - 1].replace('.js', '') + 's' + '/' + moduleFileName));
        });

        console.log(this._module);
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


    async __loadHandlerModulesAsync() {
        try {
            return await _.readdirAsync(path.resolve(__dirname, '../handlers'));
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }


}

export default Environment;