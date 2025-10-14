import express from "express";
import { engine } from "express-handlebars";
import { join, __dirname } from "./utils/index.js";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import userRoutes from "./routes/session.routes.js";
import viewRoutes from "./routes/views.routes.js";
// passport
import initializePassport from "./config/passport.config.js";
import passport from "passport";

//settings
const app = express();
app.set("PORT", 3000);
const url = "mongodb://127.0.0.1:27017/sessions";
const secret = "kjhfkjhf383?;;jmsd";
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", join(__dirname, "views"));

// console.log(join(__dirname, "views"));
// console.log(join(__dirname, "../public"));

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Conexion exitosa");
  } catch (error) {
    console.log("error de conexion");
  }
};
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, "../public")));
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: url,
      ttl: 60000,
    }),
    secret,
    resave: false,
    saveUninitialized: false,
  })
);
// passport
initializePassport();
app.use(passport.initialize());
// app.use(passport.session());
//routes
app.get("/", (req, res) => {
  res.render("home", { title: "HOME" });
});
app.use("/api/sessions", userRoutes);
app.use("/", viewRoutes);
connectDb(url);
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
