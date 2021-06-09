const Gatinho = require('../model/gatinho');

exports.findByStatus = async status => {
    try {
      const gatinho = await Gatinho.findAll({
        where: {
          status,
        },
      });
      return gatinho;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while finding ong by status');
      error.statusCode = 500;
      throw error;
    }
  };