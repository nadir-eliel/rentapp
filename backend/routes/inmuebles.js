var express = require('express');
var router = express.Router();
var Inmueble = require('../models/Inmueble');
const { request, response } = require('express');

//Obtener todos los inmuebles
router.get('/', async (req, res) => {
    try{
        const inmuebles = await Inmueble.find().exec();
        res.json(inmuebles);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Obtener un inmueble
router.get('/:idInmueble', async(req, res) => {
    try{
        //const inmueble = await Inmueble.findOne({_id:req.params.idInmueble}).exec();
        const inmueble = await Inmueble.findById(req.params.idInmueble).exec();
        res.json(inmueble);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Crear un immueble
router.post('/', async (req, res) => {
    try{
        const inmueble = new Inmueble({
            bathroom_count: req.body.bathroom_count,
            badroom_count: req.body.badroom_count,
            garage: req.body.garage,
            backyard: req.body.backyard,
            pets: req.body.pets,
            kids: req.body.kids,
            address: req.body.address,
            photos: req.body.photos
        });
        const savedInmueble = await inmueble.save();
        res.json(savedInmueble);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Actualizar inmueble
router.put('/:idInmueble', async(req, res) => {
    try{
        //const inmueble = await Inmueble.findById(req.params.idInmueble).exec();
        const inmueble = await Inmueble.findOne({_id:req.params.idInmueble}).exec();
        inmueble.set(req.body);
        await inmueble.save();
        res.json({success: 'SE ACTUALIZO CON EXITO!'});
        //res.json(inmueble);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Eliminar un inmueble
router.delete('/:inmuebleId', async(req, res) => {
    try{
        await Inmueble.deleteOne({ _id:req.params.inmuebleId}).exec();
        res.json({success: 'SE ELIMINO CON EXITO!'});
    }
    catch(error){
        return res.json(error.message)
    }
});

module.exports = router;