const controller = require('../../controllers/user');
const validators = require('../validators/user');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
    method: request.method,
    status: reply.statusCode,
    error: errors,
  });
  
  module.exports = (app) => {
    app.post('/user', validators.registerValidator(), async (request, reply) => {
      /*  #swagger.parameters['post user object'] = {
              in: 'body',
              description: "New user values",
              schema: {
                  "$username": "user name",
                  "$name": "new user",
                  "$email": "aaa@aaa.com.br",
                  "$password": "password",
              }
      } */
      const errors = validators.validateRequest(request);
      if (errors.length > 0) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.post(request, reply);
      return reply.json(response);
    });
  
    app.get('/user', async (request, reply) => {
      const response = await controller.get(request, reply);
      return reply.json(response);
    });
  
    app.get('/user/:id', async (request, reply) => {
      const response = await controller.getById(request.params.id, request, reply);
      return reply.json(response);
    });
  
    app.put('/user/:id', validators.updateValidator(), async (request, reply) => {
      /*  #swagger.parameters['put user object'] = {
              in: 'body',
              description: "New user values",
              schema: {
                  "$username": "user name",
                  "$name": "new user",
                  "$email": "aaa@aaa.com.br",
                  "$password": "password",
              }
      } */
      const errors = validators.validateRequest(request);
      if (errors.length > 0) {
        return invalidRequestReply(request, reply, errors);
      }
      const response = await controller.put(request.params.id, request, reply);
      return reply.json(response);
    });
  
    app.delete('/user/:id', async (request, reply) => {
      const response = await controller.delete(request.params.id, request, reply);
      return reply.json(response);
    });
  };
  
