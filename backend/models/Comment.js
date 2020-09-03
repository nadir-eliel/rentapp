// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var CommentSchema = Schema({
    comment: {type: String},
    created_at: {type : Date, default: Date.now },
    update_at: {type : Date, default: Date.now },
    user : {type: Schema.Types.ObjectId, ref: 'User' },
    apartament : {type: Schema.Types.ObjectId, ref: 'Comment'}
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Comment', CommentSchema);