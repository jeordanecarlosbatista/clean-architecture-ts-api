export default {
  port: process.env.PORT || 3333,
  jwtSecret: process.env.JWT_SECRET || 'abcd@123',
  mongoUrl: process.env.MONGO_URL || 'mongodb://192.168.1.105:27017/clean-node-api',
};
