const controller = require('../../controllers/gatos');
const validators = require('../validators/gatos');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/gatos', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post gatos object'] = {
            in: 'body',
            description: "New Felino values",
            schema: {
                "$tipo": "gato",
                "status": "adotado",
                "$corPelagem": "color",
                "possuiDeficiencia": "no",
                "cuidadosEspeciais": "no",
                "$sexo":"macho",
                "$idade":"filhote",
                "$castrado":"no",
                "name":"Zeus",
                "$teste":"não realizado",
                "$vacinas":"sim"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });
  app.put('/gatos/:id/status',validators.updateValidatorStatus(),async(request,reply)=>{
    /* #swagger.parameters['put gatos object']  = {
      in:'body',
      description:"Update adoption cat",
      schema:{
        "$status":"disponivel"
      }
    }*/
    const errors = validators.validateRequest(request);
    if(errors.length>0){
      return invalidRequestReply(request, reply, errors)

    }
    const response = await controller.put(request.params.id,request, reply)
    return reply.json(response);
  })

  app.get('/gatos', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/gatos/:status', async (request, reply) => {
    const response = await controller.getByStatus(request.params.status, request, reply);
    return reply.json(response);
  });


  app.put('/gatos/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put cat object'] = {
            in: 'body',
            description: "New cat values",
            schema: {
                "$tipo": "gato",
                "status": "adotado",
                "$corPelagem": "color",
                "possuiDeficiencia": "no",
                "cuidadosEspeciais": "no",
                "$sexo":"macho",
                "$idade":"filhote",
                "$castrado":"no",
                "name":"Zeus",
                "$teste":"não realizado",
                "$vacinas":"sim"
            }
    } */

    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/gatos/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });

}