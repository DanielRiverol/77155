import { Schema, model, SchemaTypes } from "mongoose";

const OrderSchema = new Schema({
  number: String,
  //   date:Date,
  business: [{ type: SchemaTypes.ObjectId, ref: "Business" }],
  user: [{ type: SchemaTypes.ObjectId, ref: "Users" }],
  status: String,
  products: [],
  totalPrice: Number,
});

export default model("Orders", OrderSchema);
