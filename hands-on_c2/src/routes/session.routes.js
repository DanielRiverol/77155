import { Router } from "express";
import { createHash, isValidadPassword } from "../utils/index.js";
import userModel from "../models/users.model.js";
import passport from "passport";
import { generateToken } from "../utils/index.js";
const router = Router();
// rutas post
router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  const password_hash = createHash(password);
  try {
    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "El correo ya existe" });
    }
    const newUser = {
      first_name,
      last_name,
      email,
      password: password_hash,
    };
    await userModel.create(newUser);

    res.status(201).redirect("/login");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.message });
  }
});
// router.post('/register',passport.authenticate('register',{failureRedirect:"failregister"}), async(req,res)=>{
//   res.redirect("/login")
// })

// router.get("/failregister", (req, res) => {
//   res
//     .status(400)
//     .send({ status: "error", message: "Error al registrar el usuario" });
// });

// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const userExist = await userModel.findOne({ email: email });
//     if (userExist) {
//       const isValid = isValidadPassword(password, userExist.password);
//       if (isValid) {
//         req.session.user = {
//           first_name: userExist.first_name,
//           last_name: userExist.last_name,
//           email: userExist.email,
//         };
//         res.redirect("/profile");
//       } else {
//         res.status(401).json({ message: "Error de credenciales" });
//       }
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error interno del servidor", err: error.mesagge });
//   }
// });
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      const isValid = isValidadPassword(password, userExist.password);
      if (isValid) {
        const userPayload = {
          id: userExist._id,
          first_name: userExist.first_name,
          last_name: userExist.last_name,
          email: userExist.email,
        };
        const token = generateToken(userPayload);
        // console.log(token);

        res.cookie("authCookie", token, { maxAge: 3600000, httpOnly: true });
        // res.send({ status: "success", message: "Login exitoso" });
        res.redirect("/profile");
      } else {
        res.status(401).json({ message: "Error de credenciales" });
      }
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.mesagge });
  }
});

// recupero de pass
router.post("/recupero", async (req, res) => {
  const { email, password } = req.body;
  try {
    // validamos si recibimos todos los campos
    const userFound = await userModel.findOne({ email });
    const password_hash = createHash(password);
    userFound.password = password_hash;
    await userFound.save();
    res.redirect("/login");
  } catch (error) {
    // agregar respuesta
  }
});

// logout
router.post("/logout", (req, res, next) => {
  if (req.session.user) {
    // Destruimos la session
  }
});

export default router;
