import { Router } from "express";
import jwt from "jsonwebtoken";
import envs from "../config/envs.js";
class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }
  //   metodo arranque
  getRouter() {
    return this.router;
  }
  //   Verbos HTTP
  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }
  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  // manejadores
  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (req, res, next) => {
      try {
        await callback(req, res, next);
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: "Error interno del servidor",
          error: error.message,
        });
      }
    });
  }
  //   manejo de las politica de autorizacion
  handlePolicies = (policies) => (req, res, next) => {
    if (policies[0] === "PUBLIC") return next();
    const authHeaders = req.headers.authorization;

    if (!authHeaders)
      return res.status(401).json({ status: "error", error: "No autorizado" });
    const token = authHeaders.split(" ")[1]; //Bearer 2xkjhfoifuihdhg
    const user = jwt.verify(token, envs.jwt_secret);
    if (!policies.includes(user.role.toUpperCase()))
      return res
        .status(403)
        .json({ status: "error", error: "No tenes los permisos correctos" });
    req.user = user;
    next();
  };
}

export default CustomRouter;
