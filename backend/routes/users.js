var express = require('express');
var router = express.Router();
const { request, response } = require('express');
const User = require('../models/User');


//Obtener todos los usuarios
router.get('/', async (req, res) => {
    try{
        const users = await User.find().exec();
        res.json(users);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Crear un usuario
router.post('/login', async (req, res) => {
    try{
        const user = new User({
            user_name: req.body.user_name,
            name: req.body.name,
            surname: req.body.surname,
            password: req.body.password,
            user_type: req.body.user_type,
            phone: req.body.phone,
            date_of_birth: req.body.date_of_birth,
            create_at: req.body.create_at,
            update_at: req.body.update_at,
        });
        const savedUser = await user.save();
        res.json(savedUser);
    }
    catch(error){
        return res.json(error.message);
    }
});


//Actualizar usuario
router.put('/:idUser', async(req, res) => {
    try{
        const user = await User.findOne({_id:req.params.idUser}).exec();
        user.set(req.body);
        await user.save();
        res.json({success: 'SE ACTUALIZO CON EXITO!'});
        //res.json(inmueble);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Eliminar un usuario
router.delete('/:userId', async(req, res) => {
    try{
        await User.deleteOne({ _id:req.params.userId}).exec();
        res.json({success: 'SE ELIMINO CON EXITO!'});
    }
    catch(error){
        return res.json(error.message)
    }
});

module.exports = router;