const dotenv = require('dotenv');
dotenv.config();

const config = {
  development: {
    host: "localhost",
    user: "root",
    password: process.env.DATABASE_SPRINT_PASSWORD,
    database: "local_festival",
    connectTimeout : 60000
  },
};

module.exports = config;