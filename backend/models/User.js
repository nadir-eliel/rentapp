// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
    user_name: String,
    name: String,
    surname: String,
    password: String,
    user_type: Number,
    phone: String,
    date_of_birth: Date,
    create_at: Date,
    update_at: Date
});

module.exports = mongoose.model('User', UserSchema);