const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './storage/imgs')
    },
    filename: function (req, file, cb) {
      cb(null, `${file.fieldname}-${Date.now()}.jpg`)
    }
  })
   
  var upload = multer({storage});

  module.exports = upload;