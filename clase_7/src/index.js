import express from "express";
import __dirname from "./utils/index.js";
import nodemailer from "nodemailer";
//settings
const app = express();
app.set("PORT", 3000);

const transport = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
  },
});

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

// mail
app.get("/mail", async (req, res) => {
  // const {email}=req.body
  const { email } = req.query;
  const result = await transport.sendMail({
    from: `Correo de prueba <${process.env.MAIL_USERNAME}>`,
    to: email,
    subject: "La verdad sobre el backend",
    html: `<div>
              <h1>La verdad sobre el backend</h1>
              
           <p>Hola ${email} mira lo que te enviamos ${process.env.HOST_URL}/recupero-password</p> 
          </div>`,
    attachments: [
      {
        filename: "img1.jpg",
        path: "./src/public/img/img1.jpg",
        cid: "img1",
      },
    ],
  });
  res.send("Correo enviado");
});
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
