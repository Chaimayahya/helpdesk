const express = require ('express')
const { isAuth } = require('../Middlewares/isAuth')
const { addCommentaire, getAllCommentaire, updateCommentaire, GetOneCommentaire, deleteCommentaire } = require('../Controllers/Commentaire')


const commentaireRouter = express.Router()

commentaireRouter.post('/addCommentaire',isAuth, addCommentaire)

commentaireRouter.get('/getAllCommentaire/:id', getAllCommentaire)

commentaireRouter.get('/getOneCommentaire/:id', GetOneCommentaire)


commentaireRouter.put('/updateCommentaire/:id', updateCommentaire)

commentaireRouter.delete('/deleteCommentaire/:id', deleteCommentaire)


module.exports = commentaireRouter