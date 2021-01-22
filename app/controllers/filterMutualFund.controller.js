const AdminMutualFund = require('../models/adminMutualFund.model');

exports.findOneByFundName = (req, res) => {  
var jsonData = JSON.parse(req.query.fundDetails);
    var json = {};
    if (jsonData.fundCompany.length > 0) {
        json["fundCompany"] = {
            "$in": jsonData.fundCompany
        }
    }
    if (jsonData.investingSector.length > 0) {
        json["investingSector"] = {
            "$in": jsonData.investingSector
        }
    }
    if (jsonData.risk.length > 0) {
        json["risk"] = {
            "$in": jsonData.risk
        }
    }
    if (jsonData.fundSize) {
        json["marketCap"] = {
            "$lte": Number(jsonData.fundSize)
        }
    }
    if (jsonData.availableToInvest) {
        json[jsonData.availableToInvest] = {
            "$eq": 'Yes'
        }
    }
    AdminMutualFund.aggregate([{"$match":
        json
    }])      

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
    })    
};