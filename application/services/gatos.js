const Gato = require('../model/gatos')

exports.register = async (gatos) =>{
    try{
        console.log(gatos)
        const newGato = await Gato.create(gatos);
        return newGato;
    }catch (erro){
        console.log(erro)
        const error = new Error("Deu ruim na criacao")
        throw error;
    }
}

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
}