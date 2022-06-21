const router = require('express').Router();
const signup = require('../controllers/users/signup')
const signin = require('../controllers/users/signin')
const withdraw = require('../controllers/users/withdraw')
const edit = require('../controllers/users/edit')
const auth = require('../controllers/users/auth')

router.get('/', auth.auth.get)
router.post('/signup', signup.signup.post);
router.post('/signin', signin.signin.post);
router.delete('/',withdraw.withdraw.delete);
router.put('/', edit.edit.put)

module.exports = router;