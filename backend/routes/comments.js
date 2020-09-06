var express = require('express');
var router = express.Router();
const { request, response } = require('express');
const Comment = require('../models/Comment');


//Obtener todos los comments
router.get('/', async (req, res) => {
    try{
        const comments = await Comment.find().exec();
        res.json(comments);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Obtener un comment
router.get('/:idComment', async(req, res) => {
    try{
        const comment = await Comment.findById(req.params.idComment).exec();
        res.json(comment);
    }
    catch(error){
        return res.send(error.message);
    }
});

//Crear un comment
router.post('/create', async (req, res) => {
    try{
        const comment = new Comment({
            comment: req.body.comment,
            user: req.body.user,
            apartament: req.body.apartament,
            create_at: req.body.create_at,
            update_at: req.body.update_at
        });
        const savedComment = await comment.save();
        res.json(savedComment);
    }
    catch(error){
        return res.json(error.message);
    }
});

//Actualizar comment
router.put('/:idComment', async(req, res) => {
    try{
        const comment = await Comment.findOne({_id:req.params.idComment}).exec();
        comment.set(req.body);
        await comment.save();
        res.json({success: 'SE ACTUALIZO CON EXITO!'});
        //res.json(comment);
    }
    catch(error){
        return res.json(error.message);
    }
});
//Eliminar un comment
router.delete('/:commentId', async(req, res) => {
    try{
        await Comment.deleteOne({ _id:req.params.commentId}).exec();
        res.json({success: 'SE ELIMINO CON EXITO!'});
    }
    catch(error){
        return res.json(error.message)
    }
});

module.exports = router;