var express = require('express');
var router = express.Router();
var Inmueble = require('../models/Inmueble');

//Obtener todos los inmuebles
router.get('/', async (req, res) => {
    try{
        const inmuebles = await Inmueble.findAll();
        res.json(inmuebles);
        //res.json("HOLA");
    }
    catch(err){
        res.json({message:err});
    }
});


//Crear un immueble
router.post('/', async (req, res) => {
    const inmueble = new Inmueble({
        name: req.body.name,
        bathroom_count: req.body.bathroom_count,
        badroom_count: req.body.badroom_count,
        garage: req.body.garage,
        backyard: req.body.backyard,
        pets: req.body.pets,
        kids: req.body.kids,
        address: req.body.address,
        photos: req.body.photos
    });
    try{
        const savedInmueble = await inmueble.save();
        res.json(savedInmueble);
    }
    catch(err){
        res.json({message:err});
    }
});


//Obtener un inmueble
router.get('/:inmuebleId', async(req, res) => {
    try{
        var inmueble = await Inmueble.findOne({
            where:{id_: req.params.inmuebleId}
        });
        res.json(inmueble);
    }
    catch(error){
        return res.send(error.message);
    }
});

module.exports = router;