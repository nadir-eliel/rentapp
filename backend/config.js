//config.js
/*module.exports = {
    PORT: process.env.PORT || 3000,
    HOST: process.env.APP_HOST,
    DB: process.env.MONGODB_URI || 'mongodb+srv://patricio:grupo5@cluster0.ibf0e.mongodb.net/rentappDB?retryWrites=true&w=majority',
  }
  */
  const config = {
      //host: process.env.APP_HOST,
      host: 'http://localhost', //Funciona
      //PORT: process.env.PORT || process.env.APP_PORT,
      port: process.env.PORT || 3000,
      MONGODB: process.env.MONGODB_URI || 'mongodb+srv://patricio:grupo5@cluster0.ibf0e.mongodb.net/rentappDB?retryWrites=true&w=majority',
    }


  module.exports = config;