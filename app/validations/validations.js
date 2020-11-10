const Joi = require('@hapi/joi');

// REGISTER VALIDATIONS

const registerValidation = data =>{

    const schema = {
        name: Joi.string().min(6).required(),
        role:Joi.string(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    }
    return Joi.validate(data,schema)
}

const loginValidation = data => {
    const schema = {
        email:Joi.string().min().required().email(),
        password:Joi.string.min(6).required()
    }
    return Joi.validate(data,schema)
}

module.exports = loginValidation ;
module.exports = registerValidation;

