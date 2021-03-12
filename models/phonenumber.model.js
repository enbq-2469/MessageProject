var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PhoneNumberSchema = new Schema ({
    id: {
        type: String,
        require: true,
    },
    number: {
        type: String,
        require: true,
    },
    country: {
        type: String,
        require: true,
    },
    status: {
        type: String,
        require: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('PhoneNumber', PhoneNumberSchema);