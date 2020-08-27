var express = require('express');
var router = express.Router();
var apiInmuebles = require('./inmuebles');

//Todas las rutas que vengan con api/inmuebles las maneja apiInmuebles
router.use('/inmuebles', apiInmuebles);

module.exports = router;