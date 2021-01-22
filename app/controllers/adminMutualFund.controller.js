const AdminMutualFund = require('../models/adminMutualFund.model');

exports.save = (req,res) =>{
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
        fundLaunchDate:req.body.fundLaunchDate,
        investingSector: req.body.investingSector,
        topHoldings:req.body.topHoldings,
        fundManagers:req.body.fundManagers,
        fundEmail:req.body.fundEmail,
        fundWebsite: req.body.fundWebsite,
        fundPhone: req.body.fundPhone,
        fundAddress:req.body.fundAddress,
        fundCompany: req.body.fundCompany,
        sipAvailable: req.body.sipAvailable,
        lumpsumAvailable: req.body.lumpsumAvailable
    })

    adminMutualFund.save()
    .then(data=>{
        res.status(200).json({data:data,msg:"MutualFund Added Successfully!"})
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
    AdminMutualFund.findOneAndUpdate({_id:req.query.fundId}, {
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
        fundLaunchDate:req.body.fundLaunchDate,
        investingSector: req.body.investingSector,
        topHoldings:req.body.topHoldings,
        fundManagers:req.body.fundManagers,
        fundEmail:req.body.fundEmail,
        fundWebsite: req.body.fundWebsite,
        fundPhone: req.body.fundPhone,
        fundAddress:req.body.fundAddress,
        fundCompany: req.body.fundCompany,
        sipAvailable: req.body.sipAvailable,
        lumpsumAvailable: req.body.lumpsumAvailable
    },{new:true})
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Not Found with this " + req.query.fundId
            });
        }
        res.json({data:adminMutualFund,msg:"MutualFund Updated Successfully!"});
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
    AdminMutualFund.findOneAndDelete({_id:req.query.fundId})
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Mutual Fund not found with id " + req.query.fundId
            });
        }
        res.status(200).json({msg: "MutualFund deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Mutual Fund not found with id " + req.query.fundId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Mutual Fund with id " + req.query.fundId
        });
    });
};


exports.findOneByName = (req, res) => {
    AdminMutualFund.find({fundName:req.params.fundName})
    .then(adminMutualFund => {
        if(!adminMutualFund) {
            return res.status(404).send({
                message: "Note not found with name " + req.params.fundName
            });            
        }
        res.send(adminMutualFund);
        console.log(adminMutualFund);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with name " + req.params.fundName
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with name " + req.params.fundName
        });
    });
}; 
