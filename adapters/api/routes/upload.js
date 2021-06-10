const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, './uploads/');
  },
  filename: function(req, file, cb){
    cb(null, file.originalname); //new Date().toISOString() +
  }
});

const fileFilter = (req, file, cb) => {
  if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg'){
    cb(null, true);
  }else{
    cb(null, false);
  }
}

const upload = multer ({
  storage : storage,
  limits : {
    fileSize : 1024 * 1024 * 2
  },
  fileFilter : fileFilter
});

const invalidRequfestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {   
  app.post('/upload', upload.single('cat_image'), function (req, res, next) {
    const response = req.file;
    return  res.status(200).send(response);
  });

};
