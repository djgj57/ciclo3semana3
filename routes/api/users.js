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

//o router.get('/', userController.Listar); y la logica que esta arriba se le envia al archivo en controladores. que es una manera mas ordenada de hacerlo. (tarea)
//o router.post('register', UserController.register); y la logica que esta arriba se le envia al archivo en controladores. que es una manera mas ordenada de hacerlo. (tarea)
router.post('/signin', userController.signin);

module.exports = router;