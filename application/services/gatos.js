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

exports.update = async (id, status)=>{
    try{
        
        const gato = await Gato.findOne({ id });
        gato.set(status);
        gato.save();
        return gato;
    } catch (err) {
        console.log(err);
        const error = new Error('An error ocurred while updating gato');
        error.statusCode = 500;
        throw error;
    }
}