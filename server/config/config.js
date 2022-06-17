const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: "local_festival",
    connectTimeout: 60000,
    dialect : "mysql"
  },
  // deploy 추가
  deploy: {
    host: process.env.DATABASE_RDS_ADDRESS,
    user: "root",
    password: process.env.DATABASE_PASSWORD,
    database: "local_festival",
    connectTimeout: 60000,
    dialect : "mysql"
  },
};

module.exports = config;
