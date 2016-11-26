import 'babel-polyfill';
/*globals Promise:true*/
import Environment from './core/environment';
import Initialize from './core/initialize';
import * as CORE from './constants/environment_constant';
import bodyParser from 'body-parser';
import compress from 'compression';
import morgan from 'morgan';

Environment.create({
        config: require('../config/settings.json'),
        coreModulesMap: [
            CORE.ROUTES_MODULES,
            CORE.HANDLERS_MODULES,
            CORE.SERVICES_MODULES
        ],
        rootDir: __dirname},
    (appEnv)=> {
        Initialize.create({
            modules: appEnv.coreModules,
            config: appEnv.configuration
        }, (initializedApp)=> {
            console.log('Initialized application => ', initializedApp);

            /**
             * Start application global middlewares section
             */
            // Use middleware Gzip compression  and static assets caching.
            initializedApp.app.use(compress());
            // HTTP request logger middleware for node.js
            initializedApp.app.use(morgan('dev'));
            // Use support json encoded bodies parse application/json
            initializedApp.app.use(bodyParser.json());
            // Use support encoded bodies parse application/x-www-form-urlencoded
            initializedApp.app.use(bodyParser.urlencoded({ extended: false }));
            /**
             * End application global middlewares section
             */

            initializedApp.run(3000, (e)=> {
                if (e) throw e;

                console.log('Running web server over port => ', 3000);
            })
        })
    });