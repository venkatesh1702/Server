const { query } = require('express');
const { Query } = require('mongoose');
const AdminMutualFund = require('../models/adminMutualFund.model');

exports.save = (req,res) =>{
    console.log(req.body)
    const adminMutualFund = new AdminMutualFund({
        fundName:req.body.fundName,
        marketCap:req.body.marketCap,
        risk:req.body.risk,
        nav:req.body.nav,
        minSIPAmount:req.body.minSIPAmount,
        minFirstInvestment:req.body.minFirstInvestment,
        minSecondInvestment:req.body.minSecondInvestment,
        exitLoad:req.body.exitLoad,
        fundStarted:req.body.fundStarted,
        expenseRatio:req.body.expenseRatio,
        fundSize:req.body.fundSize,
        rating:req.body.rating,
        topHoldings:req.body.topHoldings,
        fundManagers:req.body.fundManagers
    })

    adminMutualFund.save()
    .then(data=>{
        res.send(data)
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error"
        });
    })
}

exports.list = (req, res) => {
    AdminMutualFund.find()
    .then(adminMutualFund => {
        res.send(adminMutualFund);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
};

exports.findOne = (req, res) => {
    console.log(req.query.fundId)
    AdminMutualFund.findById(req.query.fundId)
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Note not found with id " + req.query.fundId
            });            
        }
        res.send(adminMutualFund);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.query.fundId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.query.fundId
        });
    });
};

exports.update = (req, res) => {
    console.log(req.query.fundId)
    AdminMutualFund.findOneAndUpdate({_id: req.query.fundId},{new: true})
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Not Found with this " + req.query.fundId
            });
        }
        res.send(adminMutualFund);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Mutual Fund found with id " + req.query.fundId
            });                
        }
        return res.status(500).send({
            message: "Error updating Mutual fund with id " + req.query.fundId
        });
    });
};

exports.delete = (req, res) => {
    console.log(req.query.fundId)
    AdminMutualFund.findOneAndDelete(req.query.noteId)
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Mutual Fund not found with id " + req.query.adminMutualFund
            });
        }
        res.send({message: "Mutual Fund deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Mutual Fund not found with id " + req.query.adminMutualFund
            });                
        }
        return res.status(500).send({
            message: "Could not delete note with id " + req.query.adminMutualFund
        });
    });
};
