const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config');

mongoose.connect(config.DB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("La conexión a la base de datos se ha realizado correctamente");
    // CREAR EL SERVIDOR WEB CON NODEJS
    app.listen(config.PORT, () => {
        console.log(`API corriendo en http://localhost:${config.PORT}`)
      });
})
.catch(err => console.log(err));
