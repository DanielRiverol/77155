import { Router } from "express";

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
  get(path, ...callbacks) {
    this.router.get(path, this.applyCallbacks(callbacks));
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
}

export default CustomRouter;
