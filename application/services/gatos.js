const Gato = require('../model/gatos')

exports.register = async (gatos) =>{
    try{ 
        const newGato = await Gato.create(gatos);
        return newGato;
    }catch (erro){
        const error = new Error("Deu ruim na criacao")
        throw error;
    }
}