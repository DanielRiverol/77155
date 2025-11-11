import express from "express";
import envs from "./config/envs.js";
import { connectDb } from "./config/database.js";
import userRoutes from "./routes/users.router.js";
import businessRoutes from "./routes/business.router.js";
import orderRoutes from "./routes/orders.router.js";
import cors from "cors";
// settings
const app = express();
app.set("PORT", envs.port || 5000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); //0.0.0.0:0 (*)
// routes
app.get("/", (_, res) => {
  res.status(200).json({ message: "Home page" });
});
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/business", businessRoutes);
// connect db
connectDb(envs.mongodb_url);
// listener
app.listen(app.get("PORT"), () =>
  console.log(`Server running on http://localhost:${app.get("PORT")}`)
);
