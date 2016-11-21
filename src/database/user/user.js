import SchemaBuilder from '../schema_builder';

class User extends SchemaBuilder{
    init(schemaOptions) {
        super.init(schemaOptions);
    }


    /**
     * Save user entity.
     */
    save() {
        this._schemaInstance.save((err)=> {
            if (err) throw err;
        })
    }


    /**
     * Find user entity.
     *
     * @param args
     */
    find(args) {
        this._schemaInstance.find(args, (err, users)=> {
            if (err) throw err;
        })
    }
}

export default User;