const express = require("express");
const router = express.Router();
const upload = require("../libs/storage");
const Apartment = require("../models/Apartment");
const cors = require("cors");

//Obtener todos los apartments
/*router.get("/", async (req, res) => {
  try {
    const apartments = await Apartment.find().exec();
    res.json(apartments);
  } catch (error) {
    return res.send(error.message);
  }
});*/
//Busqueda del searchbar

router.post("/", async (req, res) => {
  try {
    const apartment = await Apartment.findBySearchbar(
      req.body.city,
      req.body.priceMin,
      req.body.priceMax,
      req.body.tipeA,
      req.body.bedroom
    ).exec();
    res.json(apartment);
  } catch (error) {
    return res.send(error.message);
  }
});

//Obtener todas las ciudades
router.get("/cities", async (req, res) => {
  try {
    const salida = [];
    const cities = [];
    const apartments = await Apartment.find().exec();
    apartments.forEach((element) => {
      if (element.address.city != null) {
        const city = element.address.city;
        const province = element.address.province;
        if (!cities.includes(city)) {
          cities.push(city);
          salida.push({ city, province });
        }
      }
    });
    res.json(salida);
  } catch (error) {
    return res.send(error.message);
  }
});

//Obtener un apartment
router.get("/:idApartment", async (req, res) => {
  try {
    //const apartment = await Apartment.findOne({_id:req.params.idInmueble}).exec();
    const apartment = await Apartment.findById(req.params.idApartment).exec();
    res.json(apartment);
  } catch (error) {
    return res.send(error.message);
  }
});

router.post("/create", async (req, res) => {
  try {
    const apartment = new Apartment({
      price: req.body.price,
      type: req.body.type,
      bathroom_count: req.body.bathroom_count,
      bedroom_count: req.body.bedroom_count,
      room_count: req.body.room_count,
      other_details: req.body.other_details,
      garage: req.body.garage,
      kids: req.body.kids,
      pets: req.body.pets,
      backyard: req.body.backyard,
      pool: req.body.pool,
      address: req.body.address,
      rates: req.body.rates,
      score_rate: req.body.score_rate,
      comments_count: req.body.comments_count,
      create_at: req.body.create_at,
      update_at: req.body.update_at,
      comments: req.body.comments,
      coordinates: req.body.coordinates,
    });

    const photos = [];
    if (req.body.photos) {
      const cantidad = req.body.photos.length;
      for (i = 0; i < cantidad; i++) {
        const imgData = req.body.photos[i];
        const nombreArchivo = "img" + Math.random().toString() + ".jpg";
        //const base64Data = imgData.replace(/^data:image\/jpg;base64,/, "");
        const base64Data = imgData.replace("data:image/jpeg;base64", "");
        photos.push(`http://localhost:4000/storage/imgs/` + nombreArchivo);
        require("fs").writeFile(
          "./storage/imgs/" + nombreArchivo,
          base64Data,
          "base64",
          function (err, data) {
            if (err) {
              console.log("err", err);
            }
          }
        );
      }
    }
    apartment.photos = photos;
    const savedApartment = await apartment.save();
    res.json(savedApartment);
  } catch (error) {
    return res.json(error.message);
  }
});

//Actualizar apartment
router.put("/:idApartment", async (req, res) => {
  try {
    //const apartment = await Apartment.findById(req.params.idApartment).exec();
    const apartment = await Apartment.findOne({
      _id: req.params.idApartment,
    }).exec();

    if (req.body.photos) {
      const photos = [];
      apartment.photos = [];
      const cantidad = req.body.photos.length;
      console.log("tamaño array" + apartment.photos.length);
      for (i = 0; i < cantidad; i++) {
        const imgData = req.body.photos[i];
        const nombreArchivo = "img" + Math.random().toString() + ".jpg";
        const base64Data = imgData.replace("data:image/jpeg;base64", "");
        photos.push(`http://localhost:4000/storage/imgs/` + nombreArchivo);
        require("fs").writeFile(
          "./storage/imgs/" + nombreArchivo,
          base64Data,
          "base64",
          function (err, data) {
            if (err) {
              console.log("err", err);
            }
          }
        );
      }
      apartment.photos = photos;
    }

    //apartment.set(req.body); //Me da error al actualizar las imagenes
    if (req.body.price) {
      apartment.price = req.body.price;
    }
    if (req.body.backyard) {
      apartment.backyard = req.body.backyard;
    }
    await apartment.save();
    res.json({ success: "SE ACTUALIZO CON EXITO!" });
    //res.json(apartment);
  } catch (error) {
    return res.json(error.message);
  }
});

//Eliminar un apartment
router.delete("/:idApartment", async (req, res) => {
  try {
    await Apartment.deleteOne({ _id: req.params.idApartment }).exec();
    res.json({ success: "SE ELIMINO CON EXITO!" });
  } catch (error) {
    return res.json(error.message);
  }
});

module.exports = router;
