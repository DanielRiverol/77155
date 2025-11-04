import { Router } from "express";
import {
  getBusinesById,
  getBusiness,
  createBusiness,
  addProduct,
} from "../controllers/business.controller.js";
const router = Router();

// routes
router.get("/", getBusiness);
router.get("/:bid", getBusinesById);
router.post("/", createBusiness);
router.post("/:bid/product", addProduct);

export default router;
