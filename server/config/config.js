const dotenv = require("dotenv");
dotenv.config();

const config = {
  development: {
    host: "127.0.0.1",
    user: "root",
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: "local_festival",
    connectTimeout: 60000,
  },
};

module.exports = config;
