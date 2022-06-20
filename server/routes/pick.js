const router = require('express').Router();
const addpick = require('../controllers/pick/addpick')

router.post('/', addpick.addpick.post)
// router.get('/',)
// router.delete('/',)

module.exports = router;