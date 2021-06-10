const controller = require('../../controllers/gatos');
const validators = require('../validators/gatos');

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

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/gatos', upload.single('cat_image'), validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post gatos object'] = {
            in: 'body',
            description: "New Felino values",
            schema: {
                "tipo": "gato",
                "$status": "adotado",
                "$corPelagem": "color",
                "$possuiDeficiencia": "no",
                "$cuidadosEspeciais": "no",
                "$sexo":"macho",
                "$idade":"filhote",
                "$castrado":"no",
                "$name":"Zeus",
                "$teste":"não realizado",
                "$vacinas":"sim"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply, req.file);
    return reply.json(response);
  });
}