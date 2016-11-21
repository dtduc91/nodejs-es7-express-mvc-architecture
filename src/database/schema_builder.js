import BaseObject from '../base/base_object';
import mongoose from 'mongoose';

class SchemaBuilder extends BaseObject {
    /**
     * Current instance of the schema.
     *
     * @type {null}
     * @protected
     */
    _schemaInstance = null;


    /**
     * Initialize data access connection and events.
     *
     * @param schemaOptions
     */
    init(schemaOptions) {
        this.setupSchema(schemaOptions);
    }


    setupSchema(schemaOptions) {
        this._schemaInstance = mongoose.model(schemaOptions.name, new mongoose.Schema(schemaOptions.table));
        return this;
    }
}

export default SchemaBuilder;