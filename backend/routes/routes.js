var express = require('express');
var router = express.Router();
var apiApartaments = require('./apartaments');
var apiUsers = require('./users');
var apiComments = require('./comments');

//Todas las rutas que vengan con api/inmuebles las maneja apiInmuebles
router.use('/apartaments', apiApartaments);
router.use('/users', apiUsers);
router.use('/comments', apiComments);

module.exports = router;