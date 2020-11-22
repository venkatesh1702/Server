const User = require("../models/user.model");
const bcrypt = require('bcryptjs');


exports.save = async(req,res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const user = new User({
        name:req.body.name,
        email:req.body.email,
        role: req.body.role,
        password: hashPassword
    })

    user.save()
    .then(data => {
        res.status(200).json({data:data,msg:"User Added Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.list = (req,res) => {
    User.find()
    .then(users => {
        res.status(200).json({data:users})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.findOne = (req,res) => {
    User.findById(req.query.userId)
    .then(user => {
        if(!user) {
            return res.status(400).json("user not found");
        }
        res.status(200).json({data:user})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


exports.update = async(req,res) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password,salt)
    const user = {
        name:req.body.name,
        email:req.body.email,
        role: req.body.role,
        password: hashPassword
    }

    User.findByIdAndUpdate({_id:req.query.userId},user,{new:true})
    .then(user => {
        res.status(200).json({data:user, msg:"User Updated Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.delete = (req,res) => {
    User.findByIdAndDelete(req.query.userId)
    .then(data => {
        res.status(200).json({msg:"User Deleted Successfully!"})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}
