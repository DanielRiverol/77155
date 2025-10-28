import envs from "./envs.js";
import  mongoose from 'mongoose'

const { mongodb_url } = envs;
export const connectDB = async (url) => {
  return await mongoose.connect(mongodb_url);
};

