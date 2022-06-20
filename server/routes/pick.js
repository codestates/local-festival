const router = require('express').Router();
const addpick = require('../controllers/pick/addpick')
const delpick = require('../controllers/pick/delpick')
const getpick = require('../controllers/pick/getpick')

router.post('/', addpick.addpick.post)
router.get('/', getpick.getpick.get)
router.delete('/',delpick.delpick.delete)

module.exports = router;