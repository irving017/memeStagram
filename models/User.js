const mongoose = require('mongoose')
const Schema = mongoose.Schema // molde de la forma en como guardar los datos en db 

const userSchema = new Schema({
  username: {
      type: String,
      required: true
    },
  password: {
    type:String,
    required:true // mongo no guarde si no trae este campo debido a requiered
  },
  age:Number,
  email: String,
  memes:[
    {
      type: Schema.Types.ObjectId,
      ref:'Meme'
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref:'Comentario'
    }
  ]
})

module.exports = mongoose.model('User', userSchema)
