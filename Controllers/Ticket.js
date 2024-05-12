const Ticket = require("../Models/Ticket")


exports.addTicket = async(req,res)=>{
    try {
       
        const newTicket = new Ticket({...req.body,owner :req.user._id})

        await newTicket.save()


        res.status(200).send({msg : 'Ticket Registred', newTicket})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add Ticket"}]})
    }
}

exports.getAllTicket = async(req,res)=>{
    try {
        const tickets = await Ticket.find().populate('owner').populate('techniciens.technicien')
    
        res.status(200).send({Msg : "Ticket list",tickets})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get ticket"}]})

    }
}



exports.getOwnTicket = async(req,res)=>{
    try {
        const tickets = await Ticket.find({owner : req.user._id, comm : true}).populate('owner').populate('techniciens.technicien')
    
        res.status(200).send({Msg : "Ticket list",tickets})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get ticket"}]})

    }
}

exports.updateTicket  = async(req,res)=>{
    try {
        const {id} = req.params

        await Ticket.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("ticket updated")
    } catch (error) {
        res.status(500).send('Could not update ticket')
    }
}

exports.deleteTicket = async(req,res)=>{
    try {
        const {id} = req.params

        await Ticket.findByIdAndDelete(id)

        res.status(200).send("Ticket deleted")
    } catch (error) {
        res.status(500).send('Could not delete ticket')
    }
}