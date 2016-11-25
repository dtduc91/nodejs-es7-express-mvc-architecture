/*globals Promise:true*/
import fs from 'fs';

class Underscore {
    constructor() {
        this._initTypes();
    }

    /**
     * Adds some isTypes methods to the class, called during instantiation.
     * Methods: isArguments, isFunction, isString, isNumber, isObject, isDate, isError, isSymbol, isUndefined.
     *
     * @private
     */
    _initTypes() {
        let types = ['Arguments', 'Function', 'String', 'Number', 'Object', 'Date', 'Error', 'Symbol', 'Undefined', 'HTMLDivElement'];

        types.forEach((type) => {
            this['is'+ type] = function(typeName) {
                return input => {
                    return '[object '+ typeName +']' === Object.prototype.toString.call(input);
                }
            }(type);
        });
    }


    /**
     * Safe parse json function
     *
     * @param value
     * @param def
     * @returns {*}
     */
    safeParseJSON(value, def) {
        try {
            return JSON.parse(value);
        }
        catch(e) {
            return def;
        }
    }
}

export default new Underscore();