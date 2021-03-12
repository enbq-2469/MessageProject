
var PhoneNumber = require('../models/phonenumber.model');
var createId = require('../config/createID');

exports.index = function(req,res,next) {
    PhoneNumber.find(function(err,result){
        if(err) handleError();
        else res.send(200,result);
    });
},
exports.search = function(req,res,next){
    PhoneNumber.findById(req.body.id,function(err,result){
        if(err) handleError();
        else res.send(result);
    });
},
exports.create = function(req,res,next){
    var newPhoneNumber = new PhoneNumber({
        id: createId("PN"),
        countryname: req.body.countryname,
        dial_code : req.body.dial_code,
        imgPath: req.body.imgPath,
    });
    newPhoneNumber.save(function(err){
        if(err) handleError();
        else res.send('create country successul');
    })
},
exports.update = function(req,res,next) {
    var queryUpdate=''
    PhoneNumber.findByIdAndUpdate(req.params.id,queryUpdate,function(err){
        if(err)handleError();
        else res.send("updated phone number!");
    })
},
exports.delete = function(req,res,next) {
    PhoneNumber.findByIdAndDelete(req.params.id, function(err){
        if(err) handleError();
        else res.send('deleted phone number!');
    })
}

function handleError (req,res,err){
    res.send(500,err);
}