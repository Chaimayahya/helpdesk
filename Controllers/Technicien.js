const Technicien = require("../Models/Technicien")


exports.addTechnicien = async(req,res)=>{
    try {
        const {refT,name,email,password} = req.body
        const found = await Technicien.findOne({refT})
        if (found) {
            return res.status(400).send({errors : [{msg : "Technicien exists"}]})
        }
        const newTechnicien = new Technicien(req.body)

        await newTechnicien.save()


        res.status(200).send({msg : 'Technicien Registred', newTechnicien})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add technicien"}]})
    }
}

exports.getAllTechnicien = async(req,res)=>{
    try {
        const techniciens = await Technicien.find()
    
        res.status(200).send({Msg : "Technicien list",techniciens})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get technicien"}]})

    }
}


exports.UpdateTechnicien = async(req,res)=>{
    try {
        const {id} = req.params

        await Technicien.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("technicien updated")
    } catch (error) {
        res.status(500).send('Could not update technicien')
    }
}

exports.DeleteTechnicien= async(req,res)=>{
    try {
        const {id} = req.params

        await Technicien.findByIdAndDelete(id)

        res.status(200).send("technicien deleted")
    } catch (error) {
        res.status(500).send('Could not delete technicien')
    }
}

exports.GetOneTechnicien = async(req,res)=>{
    try {
        const {id} = req.params

        const technicien = await Technicien.findById(id)

        res.status(200).send({Msg : "technicien",technicien})
    } catch (error) {
        res.status(500).send('Could not get technicien')
    }
}