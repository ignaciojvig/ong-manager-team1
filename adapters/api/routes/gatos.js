const controller = require('../../controllers/gatos');
const validators = require('../validators/ong');

const invalidRequestReply = (request, reply, errors) => reply.status(400).json({
  method: request.method,
  status: reply.statusCode,
  error: errors,
});

module.exports = (app) => {
  app.post('/gato', validators.registerValidator(), async (request, reply) => {
    /*  #swagger.parameters['post ong object'] = {
            in: 'body',
            description: "New Felino values",
            schema: {
                "$disponivel_para_adocao": "adotado",
                "$cor_da_pelagem": "color",
                "$possui_deficiencia": "no",
                "$precisa_de_cuidados_especiais": "no"
                "$sexo":"macho"
                "$idade":"filhote"
                "$castrado":"no"
                "$nome":"Zeus"
                "$testes_FIV_Felv":"não realizado"
                "vacinas":"sim"


            }
    } */
    const errors = validators.validateRequest(request);
    if (errors.length > 0) {
      return invalidRequestReply(request, reply, errors);
    }
    const response = await controller.post(request, reply);
    return reply.json(response);
  });

  app.delete('/gato/:id', async (request, reply) => {
    const response = await controller.delete(request.params.id, request, reply);
    return reply.json(response);
  });

}