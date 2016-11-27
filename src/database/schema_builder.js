import BaseObject from '../base/base_object';
import mongoose from 'mongoose';

class SchemaBuilder extends BaseObject {
    /**
     * Initialize data access connection and events.
     *
     * @param schemaOptions
     */
    init(schemaOptions) {
        //Current instance of the schema.
        this._schemaInstance = null;
        this.setupSchema(schemaOptions);
    }


    /**
     * Setup schema model moongose.
     * 
     * @param schemaOptions
     */
    setupSchema(schemaOptions) {
        this._schemaInstance = mongoose.model(schemaOptions.name, new mongoose.Schema(schemaOptions.table));
    }
}

export default SchemaBuilder;