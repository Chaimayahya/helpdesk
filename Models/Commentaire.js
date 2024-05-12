const mongoose = require('mongoose')

const CommentaireSchema = new mongoose.Schema(
    {
        commentaire : String,
        ratting : {type : Number, default : 5},
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        },
        product : {
            type : mongoose.Types.ObjectId,
            ref : 'product'
        }
    }
)

module.exports = mongoose.model('commentaire',CommentaireSchema)