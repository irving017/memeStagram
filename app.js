//1.- importaciones
const express = require('express')
const hbs = require('hbs') // estudias hbs helpers
const mongoose = require('mongoose')
const path = require('path')
const bodyParser = require('body-parser')
//1.1 variables 
const port =3000

//2.- Configuraciones basicas
const app = express()
//2.2 view engine
app.set('view engine','hbs')
app.set('views', path.join(__dirname,'views'))
//2.3 statics
app.use(express.static(path.join(__dirname,'public')))
//herramientas de nodejs (koa js , hapijs.com)

//3.- Configuraciones avanzadas
mongoose.connect('mongodb://localhost:27017/memes',
()=>console.log('conectado a la base de datos'))
app.use(bodyParser.urlencoded({extended:true}))

//4.- Rutas
const memes = require('./routes/memes')
app.use('/',memes)

//5.- Listener de puertos y peticiones http

app.listen(port,()=>{
  console.log('escuchando el puerto 3000')
})

/*Esto es lo basico, apartir de aqui sigue la onda loca de los modelos*/ 

//6.1.- Crear la carperta
//6.3.- Apuntar al archivo

