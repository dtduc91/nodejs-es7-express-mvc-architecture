/*globals Promise:true*/
/*globals __dirname:true*/
import BaseObject from '../base/base_object';
import _ from '../utils/underscore';
import fs from 'fs';
import path from 'path';


class Environment extends BaseObject {
    init(args) {
        super.init(args);

        this._coreModules = [];
        this._config = args.config;

        this.loadApplicationModules();
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
     * Load core modules
     */
    loadApplicationModules() {
        let coreModules = [].concat(
            this.__loadCoreModulesLocation('routes'),
            this.__loadCoreModulesLocation('handlers'),
            this.__loadCoreModulesLocation('services')
        );

        coreModules.forEach(modules => {
            if (!Array.isArray(modules.files) && 0 === modules.files.length) {
                console.error('Not found module files.');
                return;
            }

            modules.files.forEach((moduleFile) => {
                console.log('Moduleee => ', moduleFile);
                let moduleFileName = moduleFile.split('_');

                try {
                    this._coreModules.push(Object.assign({},
                        {
                            modulesGroupName: modules.name,
                            path: modules.path,
                            moduleFileName: moduleFile
                        } ,
                        {
                            ref: require('../' + moduleFileName[moduleFileName.length - 1].replace('.js', '')+ 's' + '/' + moduleFile)
                        }));
                } catch (e) {
                    console.error('Cannot require module => ', e);
                }
                finally {
                    console.log('Finish load core modules.');
                }
            });
        });
    }


    /**
     * Load modules async.
     *
     * @param dirModule
     * @returns {Object}
     * @private
     */
    __loadCoreModulesLocation(dirModule) {
        try {
            return {
                name: dirModule,
                files: fs.readdirSync(path.resolve(__dirname, '../' + dirModule)),
                path: __dirname + '../' + dirModule
            };
        }
        catch(readConfigException) {
            console.error(readConfigException);
        }
    }
}

export default Environment;