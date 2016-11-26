import BaseObject from '../base/base_object';
import express from 'express';


class Initialize extends BaseObject {
    static CLASS = 'Initialize';

    init(args) {
        super.init(args);

        this._app = express();

        this.__creationOfCoreModules(args.config, args.modules);
    }


    /**
     * App instance (express).
     *
     * @returns {*}
     */
    get app() {
        return this._app;
    }


    /**
     * Getter loaded initialized modules.
     *
     * @returns {*}
     */
    get loadedModules() {return this._modules;};


    /**
     * Run application web server.
     *
     * @param port
     * @param callback
     */
    run(port, callback) {
        this._app.listen(port, callback);
    }


    /**
     * Creation of the application core module by group and give them the correct,
     * Configuration for the configuration environment config.
     *
     * @param configuration
     * @param modules
     * @private
     */
    __creationOfCoreModules(configuration, modules) {
        console.info('Start initializing modules => ', modules);

        Object.keys(modules).forEach(moduleGroupName => {
            console.log('Running module group => ', moduleGroupName);

            modules[moduleGroupName].forEach(module => {
                module.instance = module.ref.default.create(this.__configurationByModuleClass(configuration, module.ref.default.CLASS));
            });

            console.info('Instantiation application modules for the current scope running group module => ', modules[moduleGroupName]);
        });

        this._modules = modules;
    }


    /**
     * Get configuration per module by their class module name.
     *
     * @param configuration
     * @param moduleClass
     * @returns {*}
     * @private
     */
    __configurationByModuleClass(configuration, moduleClass) {
        console.log('Get configuration for module class => ', moduleClass);
        return configuration[moduleClass];
    }
}

export default Initialize;