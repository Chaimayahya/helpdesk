const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema(
    {
       description : String,
        owner : {
            type : mongoose.Types.ObjectId,
            ref : 'user'
        },
        techniciens: [{
            technicien: {
              type: mongoose.Types.ObjectId,
              ref: 'technicien'
            }
            
          }],
        status : {
            type : String,
            default : 'En cours de traitement'
        },
        comm : {
            type : String,
            default : false
        }
    }
)



module.exports = mongoose.model('ticket',ticketSchema)