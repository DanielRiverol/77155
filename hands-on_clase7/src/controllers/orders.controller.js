export const getOrder = async (req, res) => {
  res.status(200).json({ status: "success", message: "Get businnes" });
};
export const getOrderById = async (req, res) => {
  const id = req.params.oid;
  res
    .status(200)
    .json({ status: "success", message: `Get Order By ID: ${id}` });
};
export const createOrder = async (req, res) => {
  res.status(201).json({ status: "success", message: "Create Order" });
};
export const resolveOrder = async (req, res) => {
  res.status(200).json({ status: "success", message: "resolve Order" });
};
