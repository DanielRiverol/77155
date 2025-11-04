export const getUsers = async (req, res) => {
  res.status(200).json({ status: "success", message: "Get Users" });
};
export const getUserById = async (req, res) => {
  const id = req.params.id;
  res.status(200).json({ status: "success", message: `Get User By ID: ${id}` });
};
export const saveUser = async (req, res) => {
  res.status(201).json({ status: "success", message: "Save User" });
};
