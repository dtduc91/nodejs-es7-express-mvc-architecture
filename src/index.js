import 'babel-polyfill';
/*globals Promise:true*/
import Environment from './core/environment';


Environment.create({config: require('../config/settings.json')}, (appEnv)=> {
    console.log(appEnv);
});