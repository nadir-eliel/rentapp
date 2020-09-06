// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var UserSchema = Schema({
    user_name: {type: String, required: true},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    user_type: {type: String, required: true},
    phone: {type: String, required: true},
    date_of_birth: {type: Date, required: true},
    photo: {type: String},
    create_at: { type : Date, default: Date.now },
    update_at: { type : Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);