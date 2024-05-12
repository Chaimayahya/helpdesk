const { body, validationResult }  = require('express-validator')

exports.registerValidation = [
    body('email', 'You must enter a valid email').isEmail(),
    body('password', 'You must enter min 8 car').isLength({min : 8})
]

exports.loginValidation = [
    body('email', 'You must enter a valid Email').isEmail()
]
exports.Validation = (req,res,next)=>{
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(400).send(errors)
    }

    next()
}