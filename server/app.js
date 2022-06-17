// const express = require('express');
// const indexRouter = require('./routes');
// const cors = require('cors');
// const morgan = require('morgan');
// const fs = require('fs')
// const https = require('https');
// const cookieParser = require('cookie-parser');
// const db = require("./db/indexS");

// const app = express();
// const HTTPS_PORT = process.env.HTTPS_PORT || 4001;

// app.use(
//   morgan('      :method :url :status :res[content-length] - :response-time ms')
// );
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use('/', indexRouter);
// app.use(
//   cors({
//   origin: ['https://localhost:3000'],
//   credentials: true,
//   methods: ['GET', 'POST', 'OPTIONS']
//   })
// );

// let server;
// if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
//   const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
//   const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
//   const credentials = { key: privateKey, cert: certificate };

//   server = https.createServer(credentials, app);
//   server.listen(HTTPS_PORT, () => console.log('https server runnning'));
// } else {
//   server = app.listen(HTTPS_PORT, () => console.log('http server runnning'));
// }

// db.sequelize.sync()

// module.exports = server;

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
