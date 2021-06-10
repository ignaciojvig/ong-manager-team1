const dogService = require('../../application/services/dog');

exports.post = async (request) => {
  const result = await dogService.register(request.body);
  return result;
};

exports.get = async () => {
  const result = await dogService.findAll();
  return result;
};

exports.getById = async (id) => {
  const result = await dogService.findById(id);
  return result;
};

exports.put = async (id, request) => {
  const result = await dogService.update(id, request.body);
  return result;
};

exports.delete = async (id) => {
  const result = await dogService.delete(id);
  return result;
};
