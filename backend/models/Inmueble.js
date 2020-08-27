// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var InmuebleSchema = Schema({
    address:{line: String, city: String, province: String},
    name: String,
    bathroom_count: Number,
    badroom_count: Number,
    garage: Boolean,
    backyard: Boolean,
    pets: Boolean, 
    kids: Boolean,
    photos: [String],
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Inmueble', InmuebleSchema);