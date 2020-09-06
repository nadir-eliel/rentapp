var express = require('express');
var router = express.Router();
var Apartament = require('../models/Apartament');

//Obtener todos los apartaments
router.get('/apart', async (req, res) => {
    try{
        const apartaments = await Apartament.find().exec();
        res.json(apartaments);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Obtener todos las ciudades
router.get('/citys', async (req, res) => {
    try{
        const salida = [];
        const citys = [];
        const apartaments = await Apartament.find().exec();
        apartaments.forEach(element => {
            if (element.address.city != null){
                const city = element.address.city.toUpperCase();
                const province = element.address.province.toUpperCase();
             if(!citys.includes(city)){
                citys.push(city);
                salida.push({city, province});
             }
            }
        });
        res.json(salida);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Obtener un apartament
router.get('/:idApartament', async(req, res) => {
    try{
        //const apartament = await Apartament.findOne({_id:req.params.idInmueble}).exec();
        const apartament = await Apartament.findById(req.params.idApartament).exec();
        res.json(apartament);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Crear un apartament
router.post('/create', async (req, res) => {
    try{
        const apartament = new Apartament({
            price: req.body.price,
            bathroom_count: req.body.bathroom_count,
            bedroom_count: req.body.badroom_count,
            room_count: req.body.room_count,
            other_details: req.body.other_details,
            garage: req.body.garage,
            kids: req.body.kids,
            pets: req.body.pets,
            backyard: req.body.backyard,
            pool: req.body.pool,
            address: req.body.address,
            photo: req.body.photo,
            photos: req.body.photos,
            rates: req.body.rates,
            score_rate: req.body.score_rate,
            comments_count: req.body.comments_count,
            create_at: req.body.create_at,
            update_at: req.body.update_at
        });
        const savedApartament = await apartament.save();
        res.json(savedApartament);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Actualizar apartament
router.put('/:idApartament', async(req, res) => {
    try{
        //const apartament = await Apartament.findById(req.params.idApartament).exec();
        const apartament = await Apartament.findOne({_id:req.params.idApartament}).exec();
        apartament.set(req.body);
        await apartament.save();
        res.json({success: 'SE ACTUALIZO CON EXITO!'});
        //res.json(apartament);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Eliminar un apartament
router.delete('/:apartamentId', async(req, res) => {
    try{
        await Apartament.deleteOne({ _id:req.params.apartamentId}).exec();
        res.json({success: 'SE ELIMINO CON EXITO!'});
    }
    catch(error){
        return res.json(error.message)
    }
});
module.exports = router;