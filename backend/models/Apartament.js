// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var ApartamentSchema = Schema({
    price: {type: Number, required: true},
    bathroom_count: {type: Number, required: true},
    bedroom_count: {type: Number, required: true},
    room_count: {type: Number, required: true},
    other_details:{type: String, uppercase: true}, 
    garage: {type: Boolean, required: true},
    kids: {type: Boolean, required: true},
    pets: {type: Boolean, required: true},
    backyard: {type: Boolean, required: true},
    pool: {type: Boolean, required: true},
    address:{line:{type: String, uppercase: true, required: true}, city: {type: String, uppercase: true, required:true}, province: {type: String, uppercase: true, required: true}, link_map:{type: String}},
    photo:{type:String, required: true},
    photos: [String],
    rates: [{user_name:String , rate:Number, rate_date:Date}],
    score_date: {type: Number},
    comments_count:{type: Number},
    created_at: {type : Date, default: Date.now },
    update_at: {type : Date, default: Date.now },
    user : {type: Schema.Types.ObjectId, ref: 'User' },
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Apartament', ApartamentSchema);