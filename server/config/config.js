const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: "local_festival",
    connectTimeout: 60000,
  },
  // deploy 추가
  deploy: {
    host: "database-1.c5ihcddce3kx.ap-northeast-2.rds.amazonaws.com",
    user: "root",
    password: "vlclahd1",
    database: "local_festival",
    connectTimeout: 60000,
  },
};

module.exports = config;
