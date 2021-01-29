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
    if(emailExist) return res.status(201).json('Email is already exists');
    // HASH THE PASSWORD
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)

    // CREATE A NEW USER
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        role:req.body.role,
        password:hashPassword
    })
    try {
        const savedUser = await user.save();
        res.status(200).json("User Added Successfully. Login to continue.")
    } catch (error) {
        res.status(400).send(error)
    }
});


router.post('/login', async (req,res) =>{

    console.log(req.body)

    const userDetails = await User.findOne({email:req.body.email});
    console.log(userDetails);
    if(!userDetails) return res.status(201).json('Email is not Found')

    // PASSWORD IS CORRECT
    const validPassword = await bcrypt.compare(req.body.password,userDetails.password)
    if(!validPassword) return res.status(201).json('Invalid Password')

    // CREATE AND ASSIGN A TOKEN
    const token = jwt.sign({_id:userDetails._id},tokenSecrect);
    
    // res.header('auth-token',token).send(token)
    res.status(200).json({
        data: { email: userDetails.email, role: userDetails.role,userId:userDetails._id},
        token
    })

    res.send('Logged in Success')
})

module.exports = router;