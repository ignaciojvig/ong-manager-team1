const controller = require('../../controllers/veterinario');
const validators = require('../validators/veterinario');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/veterinario', validators.registerValidator(), async (request, reply) => {
            /*  #swagger.parameters['post vet object'] = {
            in: 'body',
            description: "New vet values",
            schema: {
                "$nome": "Tobias Carvalho",
                "$crmv": "1234567",
                "$cpf": "12345678910",
                "$email": "exemplo@exemplo.com",
                "$telefone": "(19) 99999-9999"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.get('/veterinario', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/veterinario/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/veterinario/:id', validators.updateValidator(), async (request, reply) => {
        /*  #swagger.parameters['put vet object'] = {
            in: 'body',
            description: "Update vet values",
            schema: {
                "$nome": "Tobias Carvalho",
                "$crmv": "1234567",
                "$cpf": "12345678910",
                "$email": "exemplo@exemplo.com",
                "$telefone": "(19) 99999-9999"
            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.put(request.params.id, request, reply);
    return reply.json(response);
  });

  app.delete('/veterinario/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
