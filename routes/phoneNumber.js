var express = require('express');
var router = express.Router();

var phoneNumberController = require('../controller/phoneNumberController.js')

router.get('/country-management', phoneNumberController.index);
router.post('/phonenumber-search', phoneNumberController.search);
router.post('/phonenumber-create', phoneNumberController.create);
router.post('/phonenumber-update', phoneNumberController.update);
router.post('/phonenumber-delete', phoneNumberController.delete);



module.exports = router;
