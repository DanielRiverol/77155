import express from "express";
import booksRoutes from "./routes/books.routes.js";
import envs from "./config/envs.js";
console.log(envs);

//settings
const app = express();
app.set("PORT", envs.port);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/books", booksRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
