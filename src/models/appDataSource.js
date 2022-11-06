const { DataSource } = require("typeorm");
const user = require("../entities/user");
const post = require("../entities/post");


const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION,
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  TIME_ZONE: process.env.TIME_ZONE,
  entities: [user,post],
  charset: 'utf8mb4',
  synchronize: true,
  logging: false,
});

module.exports = { AppDataSource };