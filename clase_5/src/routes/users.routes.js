import CustomRouter from "./CustomRouter.js";

export default class UserRouter extends CustomRouter {
  init() {
    this.get("/", (req, res) => {
      res.send("Lista usuarios");
    });
  }
}
