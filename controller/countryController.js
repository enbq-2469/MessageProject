var express = require('express');
var Country = require('../models/country.model');
var createId = require('../config/createID');


exports.index= function(req,res,next) {
    Country.find(function(err,result){
        if(err) handleError();
        res.render('/admin/country/country-management', {country: result});
    });
},
exports.search = function(req,res,next){
    Country.findById(req.body.id,function(err,result){
        if(err) handleError();
        else res.send(result);
    });
};
exports.create = function(req,res,next){
    var newCountry = new Country({
        id: createId("CT"),
        countryname: req.body.contryname,
        dial_code : req.body.dial_code,
        imgPath: req.body.imgPath,
    });
    newCountry.save(function(err){
        if(err) handleError();
        else res.send("created new country");
    });
},
exports.update = function(req,res,next) {
    var queryUpdate = {
        
    }
    Country.findByIdAndUpdate(req.params.id,queryUpdate,function(err){
        if(err)handleError();
        else res.send("updated this country");
    });
},
exports.delete = function(req,res,next) {
    Country.findByIdAndDelete(req.params.id, function(err){
        if(err) handleError();
        else res.send("deleted this country");
    });
}

function handleError (req,res,err){
    res.send(500,err);
}
