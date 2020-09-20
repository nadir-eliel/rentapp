const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const { request, response } = require("express");
const User = require("../models/User");
const passport = require("passport");
const jwt = require("jsonwebtoken");

//Obtener todos los users
router.get("/", async (req, res) => {
  try {
    if (req.user.user_name !== "ADMIN") {
      return res.json({ result: false, message: "Usuario No Valido" });
    }
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});

//Obtiene datos del perfil del usuario
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    res.json({
      message: "Datos:",
      user: req.user,
      token: req.query.secret_token,
    });
  }
);

//Obtener un user
router.get(
  "/:idUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findById(req.params.idUser).exec();
      res.json(user);
    } catch (error) {
      return res.send(error.message);
    }
  }
);

//Registrar un user
router.post("/signIn", async (req, res) => {
  try {
    const user = new User({
      user_name: req.body.user_name,
      name: req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      user_type: req.body.user_type,
      phone: req.body.phone,
      date_of_birth: req.body.date_of_birth,
      photo: req.body.photo,
      create_at: req.body.create_at,
      update_at: req.body.update_at,
    });
    const user_name = user.user_name;
    const savedUser = await user.save();
    const token = jwt.sign(
      {
        user_name,
        expire: Date.now() + 172800000, //48 hs
      },
      "top_secret"
    );
    res.json({ registration: "ok", token: token, savedUser });
  } catch (error) {
    return res.json(error.message);
  }
});

router.post("/login", async (req, res) => {
  let { user_name, password } = req.body;
  user_name = user_name.toUpperCase();
  const user = await User.findByUserName(user_name);
  if (user) {
    bcrypt.compare(password, user.password, (err, isValid) => {
      if (isValid) {
        const token = jwt.sign(
          {
            user_name,
            expire: Date.now() + 172800000, // 48 hs
          },
          "top_secret"
        );
        res.json({ login: "ok", token: token, user });
      } else {
        res.send("Password incorrecto");
      }
    });
  } else {
    res.send("user not found");
  }
});

//Actualizar un user
router.put(
  "/:idUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.params.idUser }).exec();
      user.set(req.body);
      await user.save();
      res.json({ success: "SE ACTUALIZO CON EXITO!" });
    } catch (error) {
      return res.json(error.message);
    }
  }
);

//Eliminar un user
router.delete(
  "/:idUser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      if (req.user.user_name !== "ADMIN") {
        return res.json({ result: false, message: "Usuario No Valido" });
      }
      await User.deleteOne({ _id: req.params.idUser }).exec();
      res.json({ success: "SE ELIMINO CON EXITO!" });
    } catch (error) {
      return res.json(error.message);
    }
  }
);

module.exports = router;
