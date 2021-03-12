var mongoose = require('mongoose');
var Schema = mongoose.SchemaType;
var MessageSchema = new Schema ( {
    id : {
        type : String,
        require: true,
    },
    content : {
        type: String,
        require: true,
    },
    sender : {
        type: String,
        require: true,
    },
    receiver: {
        type: String,
        require: true
    },
},{
    timestamps: true
});

module.exports = mongoose.model("Message", MessageSchema);