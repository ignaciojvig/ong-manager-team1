const gatos = require('../../adapters/api/routes/gatos');
const Gato = require('../model/gatos')

exports.register = async (gatos) =>{
    try{ 
        const newGato = await Gato.create(gatos);
        return newGato;
    }catch (erro){
      console.log(erro)
        const error = new Error("Deu ruim na criacao")
        throw error;
    }
}

exports.getByStatus= async (status) => {
  const result = await gatos.findByStatus(status);
  return result;
}
findByStatus = async status => {
    try {
      const gatinho = await Gato.findAll({
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

exports.update = async (id, newGato) => {
    try {
      const gato = await Gato.findOne({ 
          where: {
            id,
          }, 
        });
      gato.set(newGato);
      gato.save();
      return gato;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while updating cat');
      error.statusCode = 500;
      throw error;
    }
  };  

exports.delete = async (id) => {
    try {
      const gato = await Gato.destroy({
        where: {
          id,
        },
      });
      return gato;
    } catch (err) {
      console.log(err);
      const error = new Error("Deu ruim na exclusão");
      error.statusCode = 500;
      throw error;
    }
};