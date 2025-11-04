import Users from "../dao/classes/users.dao.js";

const userService = new Users();
export const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({ status: "success", payload: users });
    // hagamos un ststau 400
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const getUserById = async (req, res) => {
  const uid = req.params.uid;
  try {
    const user = await userService.getUserById(uid);
    user
      ? res.status(200).json({ status: "success", payload: user })
      : res
          .status(400)
          .json({ status: "error", message: "no se encuentra el usuario" });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
export const saveUser = async (req, res) => {
  const user = req.body;
  try {
    const newUser = await userService.createUser(user);
    res.status(201).json({ status: "success", payload: newUser });
  } catch (error) {
    return res.status(500).json({ status: "Error", error: error.message });
  }
};
