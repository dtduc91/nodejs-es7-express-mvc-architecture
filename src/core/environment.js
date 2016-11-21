/*globals Promise:true*/
/*globals __dirname:true*/
import BaseObject from '../base/base_object';
import _ from '../utils/underscore';
import path from 'path';

class Environment extends BaseObject {
    init(args) {
        super.init(args);

        this._coreModules = [];
        this._config = null;

        this.loadConfiguration();
        this.loadCoreModules();
    }


    /**
     * Getter configuration application environment.
     *
     * @returns {null|*}
     */
    get configuration() {return this._config;}


    /**
     * Getter core modules.
     *
     * @returns {Array}
     */
    get coreModules() {return this._modules;}



    /**
     * Load configuration json file.
     */
    async loadConfiguration() {
        try {
            let configFile = await _.readFileAync(path.resolve(__dirname, '../../config/settings.json'), 'utf-8');
            console.info('Load configuration json file => ', configFile);
            this._config = _.safeParseJSON(configFile, {});
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }


    /**
     * Load core modules
     */
    async loadCoreModules() {
        let modules = [].concat(
            await this.__loadModulesAsync('routes'), 
            await this.__loadModulesAsync('handlers'),
            await this.__loadModulesAsync('services')
        );

        modules.forEach(moduleFileName => {
            let moduleFileNameSplitByUnderScore = moduleFileName.split('_');
            this._coreModules.push(require('../' + moduleFileNameSplitByUnderScore[moduleFileNameSplitByUnderScore.length - 1].replace('.js', '') + 's' + '/' + moduleFileName));
        });
    }


    /**
     * Load modules async.
     *
     * @param dirname
     * @returns {Promise}
     * @private
     */
    async __loadModulesAsync(dirname) {
        try {
            return await _.readdirAsync(path.resolve(__dirname, '../' + dirname));
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }
}

export default Environment;