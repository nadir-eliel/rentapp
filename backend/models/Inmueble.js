// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var InmuebleSchema = Schema({
    bathroom_count: Number,
    badroom_count: Number,
    garage: Boolean,
    backyard: Boolean,
    pets: Boolean, 
    kids: Boolean,
    address:{line: String, city: String, province: String},
    photos: [String],
});
// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Inmueble', InmuebleSchema);