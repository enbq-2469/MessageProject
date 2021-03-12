var mongoose = require('mongoose');
var Schema = mongoose.SchemaType;
var UserSchema = new Schema({
    id:{
        type: String,
        require: true
    },
    email :{
        type: String,
        require: true,
    },
    password: {
        type:String,
        required: true,
    },
    rule: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);