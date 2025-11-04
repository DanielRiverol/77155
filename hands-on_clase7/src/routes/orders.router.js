import { Router } from "express";
import {
  getOrderById,
  getOrder,
  createOrder,
  resolveOrder,
} from "../controllers/orders.controller.js";
const router = Router();

// routes
router.get("/", getOrder);
router.get("/:oid", getOrderById);
router.post("/", createOrder);
router.put("/:oid", resolveOrder);

export default router;
