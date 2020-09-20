const express = require("express");
const router = express.Router();
const apiApartments = require("./apartments");
const apiUsers = require("./users");
const apiComments = require("./comments");

//Todas las rutas que vengan con api/apartments las maneja apiApartments
router.use("/apartments", apiApartments);
router.use("/users", apiUsers);
router.use("/comments", apiComments);

module.exports = router;
