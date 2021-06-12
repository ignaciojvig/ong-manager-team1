const veterinarioService = require('../../application/services/veterinario');

exports.post = async (request) => {
  const result = await veterinarioService.register(request.body);
  return result;
};

exports.get = async () => {
  const result = await veterinarioService.findAll();
  return result;
};

exports.getById = async (id) => {
  const result = await veterinarioService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await veterinarioService.update(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await veterinarioService.delete(id);
  return result;
};
