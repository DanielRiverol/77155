export default {
  port: process.env.PORT || 3000,
  mongodb_url: process.env.MONGO_URL,
  jwt_secret: process.env.JWT_SECRET,
};
