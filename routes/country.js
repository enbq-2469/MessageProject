var express = require('express');
var router = express.Router();

var countryController = require('../controller/countryController');

router.get('/country-management', countryController.index);
router.post('/country-search', countryController.search);
router.post('/country-create', countryController.create);
router.post('/country-update', countryController.update);
router.post('/country-delete', countryController.delete);

module.exports = router;


