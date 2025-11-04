import { connect } from "mongoose";

export const connectDb = async (mongo_url) => {
  try {
    await connect(mongo_url);
    console.log(`Base de datos conectada exitosamente`);
  } catch (error) {
    console.log(`Error al conectar la db: ${error.message}`);
  }
};
