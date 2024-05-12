const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        name : String,
        email : {type: String, required: true, unique: true},
        password : {type: String, required: true},
        role :{type :  String, default : 'admin'}
    }
)

module.exports = mongoose.model('user',userSchema)