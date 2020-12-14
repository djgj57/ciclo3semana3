const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/index.js');
const bodyPArser = require('body-parser');
const cors = require('cors');


//Instacia de express en mi app
const app = express();
app.use(cors());


//Para hacer peticiones internas (a la final no se utilizo) y resolver lio de cors.
app.use((req, res, next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods: GET, POST, DELETE');
    next();
});

//middLeware morgan para detectar peticiones 
app.use(morgan('dev'));

app.use(bodyPArser.json());
app.use(bodyPArser.urlencoded({ extended: true}));

//primera ruta
// app.get('/', (req, res)=> { 
//     res.send('Hello World!'); });

app.use('/api', apiRouter);

// podria ser:
// .com/api/user/
// .com/api/user/listar
// .com/api/user/registrar
// .com/api/user/login

app.set('PORT', process.env.PORT || 3000);


//+++++++++++++++++++++++++++++++++++++++++++
app.get('/', function(req, res) {
    console.log("Estructura base del proyecto backend");
    res.send("Estructura base del proyecto backend");
});

app.listen(app.get('PORT'), () => {
    console.log(`Running on http://localhost:${app.get('PORT')}`)
})

module.exports = app;