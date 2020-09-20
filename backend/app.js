//Es el archivo para crear el servidor web con NodeJS, contiene la configuración
//de express. En el también importamos y cargamos las rutas después de crearlas.
const express = require("express");
const bodyParser = require("body-parser");
const apiRouter = require("./routes/routes"); //traigo el fichero api
const cors = require("cors");
const app = express();

const passport = require("passport");
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
require("./auth/index").init();
app.use(passport.initialize());

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(corsOptions));

//Le estoy diciendo a express que la ruta /public haga referencia a /storage/imgs
//app.use("/public", express.static(`${__dirname}/storage/imgs`));
app.use("/storage/imgs", express.static(`${__dirname}/storage/imgs`));

//Todas las rutas que ingresen con /api, la va a gestionar apiRouter
app.use("/api", apiRouter);

module.exports = app;
