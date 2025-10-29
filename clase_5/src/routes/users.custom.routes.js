import CustomRouter from "./CustomRouter.js";
import jwt from "jsonwebtoken";
import envs from "../config/envs.js";
export default class UserRouter extends CustomRouter {
  init() {
    this.post("/login", ["PUBLIC"], (req, res) => {
      let user = { email: req.body.email, role: "user" };
      console.log(req.body.email);

      let token = jwt.sign(user, envs.jwt_secret, { expiresIn: "24h" });
      res.json({ message: "Inicio de sesión exitoso", user: token });
    });

    this.get("/", ["PUBLIC"], (req, res) => {
      res.json("Lista usuarios");
    });
    this.get("/current", ["ADMIN","USER"], (req, res) => {
      res.json(req.user);
    });
  }
}
