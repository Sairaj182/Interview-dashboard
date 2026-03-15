import { Sequelize } from "sequelize";

let sequelize;

if (!global.sequelize) {

  global.sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: "mysql",
      dialectModule: require("mysql2"),
      logging: false
    }
  );

}

sequelize = global.sequelize;

export default sequelize;
