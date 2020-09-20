const passport = require("passport");
const express = require("express");
const router = express.Router();
const { request, response } = require("express");
const Comment = require("../models/Comment");
const Apartment = require("../models/Apartment");
const User = require("../models/User");

//Obtener todos los comments
router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find().exec();
    res.json(comments);
  } catch (error) {
    return res.send(error.message);
  }
});

//Obtener un comment
router.get("/:idComment", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.idComment).exec();
    res.json(comment);
  } catch (error) {
    return res.send(error.message);
  }
});

//Crear un comment

router.post(
  "/create/:idApartment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const apartment = await Apartment.findById(req.params.idApartment);
      const user = await User.findByUserName(req.user.user_name);
      if (user != null) {
        const comment = new Comment({
          comment: req.body.comment,
          create_at: req.body.create_at,
          update_at: req.body.update_at,
          user_name: user.user_name,
        });
        comment.user = user;
        const savedComment = await comment.save();
        await apartment.comments.push(savedComment);
        apartment.save();
        res.json(apartment);
      } else {
        throw new Error("No se encuentra usuario " + req.params.userName);
      }
    } catch (error) {
      return res.json(error.message);
    }
  }
);

//Actualizar comment
router.put(
  "/:idComment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const comment = await Comment.findOne({
        _id: req.params.idComment,
      }).exec();
      comment.set(req.body);
      await comment.save();
      res.json({ success: "SE ACTUALIZO CON EXITO!" });
      //res.json(comment);
    } catch (error) {
      return res.json(error.message);
    }
  }
);

//Eliminar un comment
router.delete(
  "/:idComment",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      await Comment.deleteOne({ _id: req.params.idComment }).exec();
      res.json({ success: "SE ELIMINO CON EXITO!" });
    } catch (error) {
      return res.json(error.message);
    }
  }
);

module.exports = router;
