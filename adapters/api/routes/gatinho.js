const controller = require('../../controllers/gatinho');

module.exports = app => {
    app.get('/gatinho/:status', async (request, reply) => {
        const response = await controller.getByStatus(request.params.status, request, reply);
        return reply.json(response);
    });
}