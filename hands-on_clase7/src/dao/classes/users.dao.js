import usersModel from "../models/users.model.js";

export default class Users {
  getUsers = async () => {
    try {
      const users = await usersModel.find();
      return users;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };
  getUserById = async (uid) => {
    try {
      const user = await usersModel.findOne({ _id: uid });
      return user;
    } catch (error) {
      console.error(error.message);
      return null;
    }
  };
  createUser = async (user) => {
    try {
      const newUser = await usersModel.create(user);
      return newUser;
    } catch (error) {
      return null;
    }
  };
  updateUser = async (uid, user) => {
    try {
      const updatedUser = await usersModel.updateOne(
        { _id: uid },
        { $set: user }
      );
      return updatedUser;
    } catch (error) {
      return null;
    }
  };
}
