const e = require('express');
var mongoose = require('mongoose');
var databaseName = "messageproject";
var connect_url = `mongodb://localhost/${databaseName}`;
class Database {
    constructor() {
        this.connectDatabase();
    }
    connectDatabase() {
        mongoose.connect(connect_url, {useNewUrlParser:true}, function(err){
            if(err) throw err;
            else {
            console.log("connect sucessfull!");
            }
        })
    }
}

module.exports = new Database;

