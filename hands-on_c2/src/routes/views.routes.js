import { Router } from "express";

const router = Router();

router.get("/register", (req, res) => {
  res.render("register", { title: "REGISTER" });
});

router.get("/login", (req, res) => {
  res.render("login", { title: "LOGIN" });
});

router.get("/profile", (req, res) => {
  // console.log(req.session.user);
  // const user =  req.session.user ; 
  // console.log(user);

  res.render("profile", { title: "PROFILE", user: user });
});

router.get("/recupero", (req, res) => {
  res.render("recupero", { title: "Recuperar password" });
});
export default router;
