const router = require('express').Router();
const signup = require('../controllers/signup');
const signin = require('../controllers/signin')


router.post('/signup', signup.signup.post);
router.post('/signin', signin.signin.post);

module.exports = router;