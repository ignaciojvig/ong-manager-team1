const multer = require('multer');
const uploadConfig = require('../../controllers/upload');
const controller = require('../../controllers/gatos');
const validators = require('../validators/gatos');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/gatos', multer(uploadConfig).single('cat_image'), validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post gatos object'] = {
            in: 'body',
            description: "New Felino values",
            schema: {
                "$cat_image": "request.file.path"
                "$tipo": "gato",
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

    const response = await controller.post(request, reply, request.file.path);
    return reply.json(response);
  });
}