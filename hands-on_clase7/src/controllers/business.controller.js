export const getBusiness = async (req, res) => {
  res.status(200).json({ status: "success", message: "Get businnes" });
};
export const getBusinesById = async (req, res) => {
  const bid = req.params.bid;
  res
    .status(200)
    .json({ status: "success", message: `Get business By ID: ${bid}` });
};
export const createBusiness = async (req, res) => {
  res.status(201).json({ status: "success", message: "Create Business" });
};
export const addProduct = async (req, res) => {
  res.status(200).json({ status: "success", message: "addProduct" });
};
