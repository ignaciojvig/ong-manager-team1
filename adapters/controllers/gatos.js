const gatos = require('../../application/services/ong');

exports.post = async (request) => {
  const result = await gato.register(request.body);
  return result;
};

exports.get = async (request) => {
  const result = await gato.findAll(request.body);
  return result;
};

exports.getById = async (id) => {
  const result = await gato.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await gato.update(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await gato.delete(id);
  return result;
};
