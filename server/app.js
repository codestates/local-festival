
const express = require('express');
const indexRouter = require('./routes');
const cors = require('cors');
const morgan = require('morgan');
const db = require("./db/indexS");

const app = express();
const port = 4001;

app.use(
  morgan('      :method :url :status :res[content-length] - :response-time ms')
);
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', indexRouter);


db.sequelize.sync()

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});
