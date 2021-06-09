const Gato = require('../model/gato')

exports.register = async (gato) =>{
    try{
        const newGato = await Gato.create(gato);
        return newGato;
    }catch (error){
        const error = new Error("Deu ruim na criacao")
        throw error;
    }
}