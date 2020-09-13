const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;


const UserSchema = Schema({

  user_name: {
    type: String,
    required: true,
    uppercase: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
    uppercase: true,
  },
  surname: {
    type: String,
    required: true,
    uppercase: true,
  },
  email: {
    type: String,
    required: true,
    uppercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  user_type: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  date_of_birth: {
    type: Date,
    required: true,
  },
  photo: {
    type: String,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
});
//Se agrega un método findByUserName, necesario para buscar por el atributo user_name
UserSchema.static("findByUserName", function (userName) {
  return this.findOne({ user_name: userName });

});

//Antes de guardar realiza un hash del String password y lo reemplaza por el ingresado por el usuario
UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

//Compara si es válido el password
UserSchema.methods.isValidPassword = async function (password) {
  const user = this;
  const compare = await bcrypt.compare(password, user.password);
  return compare;
};

module.exports = mongoose.model("User", UserSchema);
