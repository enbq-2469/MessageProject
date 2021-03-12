var express = require('express');
var multer = require('multer');
var upload = multer().single('image');
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, '/public/images/upload');
      },
      filename: function (req, file, callback) {
        callback(null, file.fieldname);
      }
})