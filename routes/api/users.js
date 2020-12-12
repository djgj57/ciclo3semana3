const router = require('express').Router();
const models = require('../../models'); 
const bcrypt = require('bcryptjs');
const { route } = require('..');

//Si se estuviera trabajando con controladores, sería asi:
const userController = require('../../controllers/UserController.js');

//api/user/       =>Me devuelve un objeto con mis usuarios
router.get('/', async(req, res)=>{
    const user = await models.user.findAll()
    res.status(200).json(user);
});

//api/user/register
router.post('/register', async(req, res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await models.user.create(req.body);
    res.status(200).json(user)
});

router.post('/signin', userController.signin);

module.exports = router;