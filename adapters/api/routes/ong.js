const controller = require('../../controllers/ong');
const validators = require('../validators/ong');
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
    cb(null,false);
  }
}

const upload = multer ({
  storage : storage,
  limits : {
    fileSize : 1024 * 1024 * 3
  },
  fileFilter : fileFilter
});

const invalidRequfestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => { 
  app.post('/ong', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post ong object'] = {
            in: 'body',
            description: "New ong values",
            schema: {
                "$name": "new ong",
                "$description": "ong description",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/ong', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/ong/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/ong/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put ong object'] = {
            in: 'body',
            description: "New ong values",
            schema: {
                "$name": "new ong",
                "$description": "ong description",
                "$email": "aaa@aaa.com",
                "$phone": "(19) 99999-9999"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/ong/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });

  app.post('/upload', upload.single('cat_image'), function (req, res, next) {
    const response = req.file;
    return  res.status(200).send(response);
  });

};
