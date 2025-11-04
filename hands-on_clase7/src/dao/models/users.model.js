import { Schema, model, SchemaTypes } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  role: String,
  orders: [{ type: SchemaTypes.ObjectId, ref: "Orders" }],
});

export default model("Users", UserSchema);
