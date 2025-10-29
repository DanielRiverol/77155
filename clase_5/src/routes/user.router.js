import { Router } from "express";
import userController from "../controllers/users.controller.js";
const router = Router();
router.get("/", userController.getUsers);
export default router;
