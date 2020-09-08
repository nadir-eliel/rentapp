var express = require("express");
var router = express.Router();
const { request, response } = require("express");
const User = require("../models/User");

//Obtener todos los users
router.get("/", async (req, res) => {
  try {
    const users = await User.find().exec();
    res.json(users);
  } catch (error) {
    return res.send(error.message);
  }
});


//Obtener un user
router.get("/:idUser", async (req, res) => {
  try {
    const user = await User.findById(req.params.idUser).exec();
    res.json(user);
  } catch (error) {
    return res.send(error.message);
  }
});

//Mostrar registro de user
router.get("/signIn", async (req, res) => {
  return res.send("VISTA PARA REGISTRARSE");
});

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
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    return res.json(error.message);
  }
});

//Mostrar login de user
router.get("/login", async (req, res) => {
  return res.send("VISTA PARA INGRESAR/LOGUEARSE");
});
//Verificar si los datos ingresados existen
router.post("/login", async (req, res) => {
  return res.send("VERIFICA LAS CREDENCIALES");
});
//Para cerrar sesion
router.get("/logout", async (req, res) => {
  return res.send("CIERRA LA SESION Y REDIRIGE");
});

//Actualizar un user

router.put('/:idUser', async(req, res) => {
    try{
        const user = await User.findOne({_id:req.params.idUser}).exec();
        user.set(req.body);
        await user.save();
        res.json({success: 'SE ACTUALIZO CON EXITO!'});
    }
    catch(error){
        return res.json(error.message);
    }
});

//Eliminar un user
router.delete("/:userId", async (req, res) => {
  try {
    await User.deleteOne({ _id: req.params.userId }).exec();
    res.json({ success: "SE ELIMINO CON EXITO!" });
  } catch (error) {
    return res.json(error.message);
  }
});

module.exports = router;
