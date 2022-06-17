const router = require('express').Router();
const controller = require('../controllers/festivals');


router.get('/', controller.festivals.get);

//*테스트용



module.exports = router;