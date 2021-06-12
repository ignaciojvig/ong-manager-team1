const User = require('../model/user');

exports.register = async (user) => {
    try {
      const newUser = await User.create(user);
      return newUser;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while creating user');
      error.statusCode = 500;
      throw error;
    }
  };
  
  exports.findAll = async (user) => {
    try {
      const users = await User.findAll({
        where: user,
      });
      return users;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while finding user');
      error.statusCode = 500;
      throw error;
    }
  };
  
  exports.findById = async (id) => {
    try {
      const users = await User.findAll({
        where: {
          id,
        },
      });
      return users;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while finding user by id');
      error.statusCode = 500;
      throw error;
    }
  };
  
  exports.update = async (id, newUser) => {
    try {
      const user = await User.findOne({ 
        where: {
          id,
        }, 
      });
      user.set(newUser);
      user.save();
      return user;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while updating user');
      error.statusCode = 500;
      throw error;
    }
    
  };
  
  exports.delete = async (id) => {
    try {
      const user = await User.destroy({
        where: {
          id,
        },
      });
      return user;
    } catch (err) {
      console.log(err);
      const error = new Error('An error ocurred while deleting user');
      error.statusCode = 500;
      throw error;
    }
  };