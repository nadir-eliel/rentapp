// Cargamos el módulo de mongoose
var mongoose =  require('mongoose');

// Usaremos los esquemas
var Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
var ApartamentSchema = Schema({
    bathroom_count: Number,
    bedroom_count: Number,
    room_count: Number,
    other_details:String,
    garage: Boolean,
    kids: Boolean,
    pets: Boolean, 
    backyard: Boolean,
    pool: Boolean,
    address:{line: String, city: String, province: String, link_map:String},
    photos: [String],
    rates: [{user_name:String , rate:Number, rate_date:Date}],
    score_date: Number,
    created_at: { type : Date, default: Date.now },
    update_at: { type : Date, default: Date.now },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model('Apartament', ApartamentSchema);