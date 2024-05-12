const express = require ('express')

const { isAuth } = require('../Middlewares/isAuth')
const { addTicket, getAllTicket, getOwnTicket, updateTicket, deleteTicket } = require('../Controllers/Ticket')



const ticketRouter = express.Router()

ticketRouter.post('/addTicket',isAuth,addTicket)

ticketRouter.get('/getAllTicket',getAllTicket )

ticketRouter.get('/getOwnTicket', isAuth,getOwnTicket )



ticketRouter.put('/updateTicket/:id',updateTicket )

ticketRouter.delete('/deleteTicket/:id', deleteTicket)


module.exports = ticketRouter