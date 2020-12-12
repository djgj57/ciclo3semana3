const router = require('express').Router();
const apiRouterUser = require('./api/users');

router.use('/auth', apiRouterUser); //.com/api/user


module.exports = router;
