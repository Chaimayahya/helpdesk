const express = require('express')
const ConnectDB = require('./Config/ConnectDB')
const userRouter = require('./Routes/User')
const commentaireRouter = require('./Routes/Commentaire')
const technicienRouter = require('./Routes/Technicien')
const ticketRouter = require('./Routes/Ticket')

const app = express()

require ('dotenv').config()

ConnectDB()

app.use(express.json())
app.use('/api/user', userRouter)
app.use('/api/technicien', technicienRouter)
app.use('/api/ticket',ticketRouter)
app.use('/api/commentaire', commentaireRouter)


app.listen(process.env.port, console.log(`Server is running on the port ${process.env.port}`))