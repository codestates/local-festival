const express = require('express');
const router = express.Router();

const festivalRouter = require('./festivals');
// const usersRouter = require('./users');

router.use('/festivals', festivalRouter);
// router.use('/users', usersRouter);

module.exports = router;