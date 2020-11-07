const router = require('express').Router();
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const registerValidation = require('../validations/validations')
const loginValidation = require('../validations/validations')
const tokenSecrect = 'vddskjfdfkdjefsf'
router.post('/register', async (req, res) => {
     
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // CHECK THE USER IS ALREADY EXISTS
    const emailExist = await User.findOne({email:req.body.email})
    if(emailExist) return res.status(400).send('Email is already exists');

    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    // CREATE A NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        // role:req.body.role,
        // confirmPassword:req.body.confirmPassword,
        password:hashPassword
    })
    try {
        const savedUser = await user.save();
        res.send({user:user._id})
    } catch (error) {
        res.status(400).send(error)
    }
});


router.post('/login', async (req,res) =>{
    // console.log(req.body)
    // const {error} = loginValidation(req.body)
    // console.log(error)
    // if(error) return res.status(400).send(error.details[0].message)

    const userDetails = await User.findOne({email:req.body.email});
    
    if(!userDetails) return res.status(400).send('Email is not Found')

    // PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(req.body.password,userDetails.password)
    if(!validPassword) return res.status(400).send('Invalid Password')

    // CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id:userDetails._id},tokenSecrect);
    res.header('auth-token',token).send(token)
    


    res.send('Logged In Success')
})

module.exports = router;