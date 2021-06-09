const gatinhoService = require('../../application/services/gatinho');

exports.getByStatus= async (status) => {
    const result = await gatinhoService.findByStatus(status);
    return result;
};