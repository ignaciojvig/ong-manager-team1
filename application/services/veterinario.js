const Veterinario = require('../model/veterinario');

exports.register = async (veterinario) => {
  try {
    const newVeterinario = await Veterinario.create(veterinario);
    return newVeterinario;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating veterinarian');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async (veterinario) => {
  try {
    const veterinarios = await Veterinario.findAll();
    return veterinarios;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding veterinarians');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const veterinarios = await Veterinario.findAll({
      where: {
        id,
      },
    });
    return veterinarios;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding veterinarian by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newVeterinario) => {
  try {
    const veterinario = await Veterinario.findOne({ id });
    veterinario.set(newVeterinario);
    veterinario.save();
    return veterinario;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating veterinarian');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const veterinario = await Veterinario.destroy({
      where: {
        id,
      },
    });
    return veterinario;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting veterinarian');
    error.statusCode = 500;
    throw error;
  }
};
