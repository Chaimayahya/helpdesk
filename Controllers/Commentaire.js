const Commentaire = require("../Models/Commentaire")

exports.addCommentaire = async(req,res)=>{
    try {

        const newCommantaire = new Commentaire({...req.body,owner :req.user._id})

        await newCommantaire.save()


        res.status(200).send({msg : 'Commentaire Registred', newCommantaire})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not add commentaire"}]})
    }
}


exports.getAllCommentaire = async(req,res)=>{
    const {id} = req.params
    try {
        const commentaires = await Commentaire.find({product : id}).populate('owner').populate('product')
    
        res.status(200).send({Msg : "Commentaire list",commentaires})
    } catch (error) {
        res.status(500).send({errors : [{msg : "Could not get commentaires"}]})

    }
}

exports.updateCommentaire  = async(req,res)=>{
    try {
        const {id} = req.params

        await Commentaire.findByIdAndUpdate(id,{$set : req.body}) 

        res.status(200).send("Commentaire updated")
    } catch (error) {
        res.status(500).send('Could not update Commentaire')
    }
}

exports.GetOneCommentaire = async(req,res)=>{
    try {
        const {id} = req.params

        const commentaire = await Commentaire.findById(id)

        res.status(200).send({Msg : "commentaire",commentaire})
    } catch (error) {
        res.status(500).send('Could not get commentaire')
    }
}

exports.deleteCommentaire = async(req,res)=>{
    try {
        const {id} = req.params

        await Commentaire.findByIdAndDelete(id)

        res.status(200).send("Commentaire deleted")
    } catch (error) {
        res.status(500).send('Could not delete Commentaire')
    }
}