const router = require('express').Router();
const controller = require('./../controllers');


router.get('/', controller.festivals.get);

module.exports = router;