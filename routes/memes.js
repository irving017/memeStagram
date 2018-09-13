//6.4 escribir las rutas
const express= require('express')
const router = express.Router() // no olvides los parentesis pofavo jaja
//traer el modelo
const Meme = require('../models/Meme')

router.get('/',(req,res)=>{
  res.render('home')
})
//POST siempre viene en pares carajo!! no la cagues
router.get('/new',(req,res)=>{
  res.render('form')
})

//POST siempre viene en pares carajo!! no la cagues
router.post('/new',(req,res,next)=>{
  //vamos a utilizar el modelos para guardar algo ne la bd
  //utilizar metodo de mongoose
  const nuevoMeme =req.body
  Meme.create(nuevoMeme)
  .then(meme=>{
    res.render('meme',meme)
  })
  .catch(e=>next(e))
})
router.get('/memes',(req,res,next)=>{
  Meme.find()
  .then(memes=>{
    res.render('memes',{memes})
  })
  .catch(e=>next(e))
})

router.get('/memes/:id',(req,res)=>{
  //1.- obtengo el id de losqu debo de mostrar
  const {id} = req.params
  const {dark} =req.query
  const {color} = req.query
  //2.- lo busco en la base de datos
  //Meme.findOne({_id:id})
  Meme.findById(id)
  .then(meme=>{
    //3.- se lo doy al template
    if(dark) meme.dark = true
    if(color) meme.color = true
    res.render('detail',meme)
  })
  .catch()
  
})// los : son para indicar que es una variable


module.exports = router