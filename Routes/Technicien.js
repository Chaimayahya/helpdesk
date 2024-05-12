const express = require ('express')
const { addTechnicien, getAllTechnicien, UpdateTechnicien, DeleteTechnicien, GetOneTechnicien } = require('../Controllers/Technicien')


const technicienRouter = express.Router()

technicienRouter.post('/addTechnicien',addTechnicien)

technicienRouter.get('/getAllTechnicien', getAllTechnicien)

technicienRouter.put('/updateTechnicien/:id',UpdateTechnicien)

technicienRouter.delete('/deleteTechnicien/:id',DeleteTechnicien)

technicienRouter.get('/getOneTechnicien/:id',GetOneTechnicien)

module.exports = technicienRouter