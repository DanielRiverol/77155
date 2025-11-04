import Business from "../dao/classes/business.dao.js";

// instanciamos la clase
const businessService = new Business();

export const getBusiness = async (req, res) => {
  try {
    const business = await businessService.getBusiness();
    !business
      ? res.status(404).json({ status: "not-found" })
      : res.status(200).json({ status: "success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
export const getBusinessById = async (req, res) => {
  const { bid } = req.params;
  try {
    const business = await businessService.getBusinessById(bid);
    !business
      ? res.status(404).json({ status: "not-found" })
      : res.status(200).json({ status: "success", payload: business });
    // res.status(200).json({ status: "success", payload: "getBusinessById" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
export const createBusiness = async (req, res) => {
  const business = req.body;
  try {
    const newBusiness = await businessService.createBusiness(business);
    res.status(200).json({ status: "success", payload: newBusiness });
    // res.status(201).json({ status: "success", payload: "createBusiness" });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};

export const addProduct = async (req, res) => {
  const product = req.body;
  const { bid } = req.params;
  try {
    const business = await businessService.getBusinessById(bid);
    // actualizo el business
    business.products.push(product);

    await businessService.updateBusiness(business._id, business);
    res.status(200).json({ status: "success", payload: business });
  } catch (error) {
    return res.status(500).json({ status: "error", message: error.message });
  }
};
