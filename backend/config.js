//config.js
module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.MONGODB_URI || 'mongodb+srv://patricio:grupo5@cluster0.ibf0e.mongodb.net/rentappDB?retryWrites=true&w=majority',
  }