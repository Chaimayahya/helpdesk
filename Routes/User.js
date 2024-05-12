const express = require ('express')
const { SignUp, SignIn, DeleteUser, UpdateUser, GetOneUser, GetAllUsers } = require('../Controllers/User')
const { registerValidation, Validation, loginValidation } = require('../Middlewares/Validation')
const { isAuth } = require('../Middlewares/isAuth')


const userRouter = express.Router()

userRouter.post('/SignUp', registerValidation, Validation, SignUp)

userRouter.post('/SignIn',loginValidation, Validation, SignIn)

userRouter.get('/ConnectedUser',isAuth, (req,res)=>{res.send(req.user)})

userRouter.delete('/deleteUser/:id',DeleteUser)

userRouter.put('/updateUser/:id',UpdateUser)

userRouter.get('/getOneUser/:id',GetOneUser)

userRouter.get('/getAllUsers',GetAllUsers)



module.exports = userRouter