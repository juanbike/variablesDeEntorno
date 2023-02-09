/* eslint-disable prettier/prettier */
export default () => ({
  
port: parseInt(process.env.PORT) || 3000,

mongoService:{
  userName: process.env.MONGO_USERNAME,
  password: process.env.MONGO_PASSWORD,
  database: process.env.MONGO_DATABASE,
  host:process.env.MONGO_HOST
}
  
  });
