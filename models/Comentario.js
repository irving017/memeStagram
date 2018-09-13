const mongoose = require('mongoose')
const Schema = mongoose.Schema // molde de la forma en como guardar los datos en db 

const commentSchema = new Schema({
  username:{
    type: Schema.Types.ObjectId
  },
  meme: {
    type: Schema.Types.ObjectId
  },
  message: String
})

module.exports = mongoose.model('Comentario', commentSchema)