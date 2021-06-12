const userService = require('../../application/services/user');

exports.post = async (request) => {
    const result = await userService.register(request.body);
    return result;
  };
  
  exports.get = async (request) => {
    const result = await userService.findAll(request.body);
    return result;
  };
  
  exports.getById = async (id) => {
    const result = await userService.findById(id);
    return result;
  };
  
  exports.put = async (id, request) => {
    const result = await userService.update(id, request.body);
    return result;
  };
  
  exports.delete = async (id) => {
    const result = await userService.delete(id);
    return result;
  };
  