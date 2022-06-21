const router = require('express').Router();
const apiController = require('../controller/apiController')




router.get('/landing-page', apiController.landingPage);


module.exports = router;