var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CountrySchema = new Schema ({
    id: {
        type: String,
        require: true
    },
    countryname : {
        type: String,
        require: true
    },
    dial_code: {
        type: String,
        require: true
    },
    imgPath : {
        type:String,
        require: true,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Country", CountrySchema);