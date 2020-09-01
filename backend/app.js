//Es el archivo para crear el servidor web con NodeJS, contiene la configuración 
//de express. En el también importamos y cargamos las rutas después de crearlas.
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/routes'); //traigo el fichero api
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Todas las rutas que ingresen con /api, la va a gestionar apiRouter
app.use('/api', apiRouter);

module.exports = app;