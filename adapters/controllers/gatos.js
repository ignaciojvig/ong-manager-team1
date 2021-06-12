const gatos = require('../../application/services/gatos');

exports.post = async (request) => {
  const result = await gatos.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await gatos.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await gatos.findById(id);
  return result;
};

exports.getByStatus= async (status) => {
  const result = await findByStatus(status);
  return result;
};

exports.put = async (id, request) => {
  const result = await gatos.update(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await gatos.delete(id);
  return result;
};