// Cargamos el módulo de mongoose
const mongoose = require("mongoose");

const config = require("../config");

// Usaremos los esquemas
const Schema = mongoose.Schema;

// Creamos el objeto del esquema y sus atributos
const ApartmentSchema = Schema({
  price: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  bathroom_count: {
    type: Number,
    required: true,
  },
  bedroom_count: {
    type: Number,
    required: true,
  },
  room_count: {
    type: Number,
    required: true,
  },
  other_details: {
    type: String,
    uppercase: true,
  },
  garage: {
    type: Boolean,
    required: true,
  },
  kids: {
    type: Boolean,
    required: true,
  },
  pets: {
    type: Boolean,
    required: true,
  },
  backyard: {
    type: Boolean,
    required: true,
  },
  pool: {
    type: Boolean,
    required: true,
  },
  address: {
    line: {
      type: String,
      uppercase: true,
      required: true,
    },
    city: {
      type: String,
      uppercase: true,
      required: true,
    },
    province: {
      type: String,
      uppercase: true,
      required: true,
    },
    link_map: {
      type: String,
    },
  },
  photos: [String],
  rates: [
    {
      user_name: String,
      rate: Number,
      rate_date: Date,
    },
  ],
  score_date: {
    type: Number,
  },
  comments_count: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  comments: [
    {
      type: Array,
    },
  ],
});
/*
//Creamos una metodo setImgUrl para almecenar las imagenes
ApartmentSchema.methods.setImgUrl = function setImgUrl(filename) {
  const port = config.port;
  const host = config.host;
  //this.photo = `${host}:${port}/public/${filename}`;
  this.photos.push(`${host}:${port}/public/${filename}`);
};
*/
ApartmentSchema.methods.setImgUrl = function setImgUrl(filename) {
  const port = config.port;
  const host = "https://rentapp-imgs.s3-sa-east-1.amazonaws.com/img";
  this.photos.push(`${host}/public/${filename}`);
};

//Se agrega un método findBySearchbar, necesario para buscar los Apartments a traves del searchbar
ApartmentSchema.static("findBySearchbar", function (
  city,
  priceMin,
  priceMax,
  typeA,
  bedroom
) {
  return this.find({
    "address.city": city,
    price: { $gte: priceMin, $lte: priceMax },
    type: typeA,
    bedroom_count: bedroom,
  });
});

// Exportamos el modelo para usarlo en otros ficheros
module.exports = mongoose.model("Apartment", ApartmentSchema);
