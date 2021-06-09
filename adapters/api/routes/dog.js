const controller = require('../../controllers/dog');
const validators = require('../validators/dog');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/dog', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post dog object'] = {
            in: 'body',
            description: "New dog values",
            schema: {
                "$name": "new dog",
                "$description": "dog description",
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

  app.get('/dog', async (request, reply) => {
    const response = await controller.get(request, reply);
    return reply.json(response);
  });

  app.get('/dog/:id', async (request, reply) => {
    const response = await controller.getById(request.params.id, request, reply);
    return reply.json(response);
  });

  app.put('/dog/:id', validators.updateValidator(), async (request, reply) => {
    /*  #swagger.parameters['put dog object'] = {
            in: 'body',
            description: "New dog values",
            schema: {
                "$name": "new dog",
                "$description": "dog description",
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

  app.delete('/dog/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });
};
