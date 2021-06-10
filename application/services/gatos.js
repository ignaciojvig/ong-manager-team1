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