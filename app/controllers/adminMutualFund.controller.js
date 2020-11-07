const AdminMutualFund = require('../models/adminMutualFund.model');

exports.create = (req,res) =>{
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