import envs from "./envs.js";
// import  mongoose

const { mongodb_url } = envs;
export const connectDB = async (url) => {
  await mongoose.connect(url);
};

connectDB(mongodb_url);
