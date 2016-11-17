import 'babel-polyfill';
/*globals Promise:true*/

class rootDemo {

    /**
     * Dummy constructor best practice for constructor is to look like this
     * Constructor should not do any business logic of the instance.
     */
    constructor() {}


    /**
     * Demonstration for async operation with the unique key async
     * But with the feeling of sync code.
     *
     * @param text
     * @returns {*}
     */
    async foo(text) {
        try {
            return await this.bar(text);
        }
        catch(error) {
            return error;
        }
    }

    /**
     * Demo of async call to db, reading a file, calling external api etc..
     *
     * @param text
     * @returns {Promise}
     */
    bar(text) {
        return new Promise((resolve, reject) => {
            if ('config' === text) {
                return resolve('test-config');
            }
            
            reject('error');
        });
    }
}

// Export the instance for using it in another file.
export default rootDemo;

// Creating the instance class above.
let rootDemoInstance = new rootDemo();

// Calling a demo function for getting our config.
rootDemoInstance.foo('config');