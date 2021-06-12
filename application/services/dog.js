const Dog = require('../model/dog');

exports.register = async (dog) => {
  try {
    const newDog = await Dog.create(dog);
    return newDog;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while creating a dog');
    error.statusCode = 500;
    throw error;
  }
};

exports.findAll = async () => {
  try {
    const dogs = await Dog.findAll();
    return dogs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding dogs');
    error.statusCode = 500;
    throw error;
  }
};

exports.findById = async (id) => {
  try {
    const dogs = await Dog.findAll({
      where: {
        id,
      },
    });
    return dogs;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while finding dog by id');
    error.statusCode = 500;
    throw error;
  }
};

exports.update = async (id, newDog) => {
  try {
    const dog = await Dog.findOne({ id });
    dog.set(newDog);
    dog.save();
    return dog;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while updating dog');
    error.statusCode = 500;
    throw error;
  }
};

exports.delete = async (id) => {
  try {
    const dog = await Dog.destroy({
      where: {
        id,
      },
    });
    return dog;
  } catch (err) {
    console.log(err);
    const error = new Error('An error ocurred while deleting dog');
    error.statusCode = 500;
    throw error;
  }
};
