const mongoose = require('mongoose')

const technicienSchema = new mongoose.Schema(
    {
        refT:{ type: String, unique: true},
        name : String,
       
        email : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        role :{type :  String, default : 'technicien'}
       
        
    }
)

module.exports = mongoose.model('technicien',technicienSchema)