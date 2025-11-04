import { Schema, model } from "mongoose";

const BusinessSchema = new Schema({
  name: String,
  products: [],
});

export default model("Business", BusinessSchema);
