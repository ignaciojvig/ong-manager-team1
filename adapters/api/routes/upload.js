const multer = require('multer');
const uploadConfig = require('../../../config/upload');

module.exports = (app) => {

app.post('/upload', multer(uploadConfig).single('image'), (req, res) => {
      const response = req.file; 
      return  res.status(200).send(response);
});

}
