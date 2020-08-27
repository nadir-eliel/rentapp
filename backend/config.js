module.exports = {
    PORT: process.env.PORT || 3000,
    DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/ejemploBase',
    SECRET_TOKEN: process.env.SECRET_TOKEN || 'micontrasena'
  }