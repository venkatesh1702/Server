const AdminStock = require('../models/adminStock.model');
const multer = require('multer');


exports.save = (req,res)=>{
    
    const adminStock = new AdminStock({
        stockName :req.body.stockName,
        marketCap :req.body.marketCap,
        peRatio :req.body.peRatio,
        pbRatio:req.body.pbRatio,
        industryPE:req.body.industryPE,
        divYield:req.body.divYield,
        bookValue:req.body.bookValue,
        epsTTM:req.body.epsTTM,
        roe:req.body.roe,
        aboutCompany:req.body.aboutCompany,
        organization:req.body.organization,
        foundedYear:req.body.foundedYear,
        managingDirector:req.body.managingDirector,
        shareHoldingPattern:req.body.shareHoldingPattern,
        brandImg:req.body.brandImg,
        sector:req.body.sector,
        division:req.body.division,
        address:req.body.address,
        phone:req.body.phone,
        launchDate:req.body.launchDate,
        email:req.body.email,
        website:req.body.website
    })

    adminStock.save()
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({
            message: err.message || "Error"
        });
    })
};

exports.list = (req, res) => {
    AdminStock.find()
    .then(adminStock => {
        res.send(adminStock);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
};

exports.findOne = (req, res) => {
    console.log(req.query.stockId)
    AdminStock.findById(req.query.stockId)
    .then(adminStock => {
        if(!adminStock) {
            return res.status(404).send({
                message: "Note not found with id " + req.query.stockId
            });            
        }
        res.send(adminStock);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.query.stockId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.query.stockId
        });
    });
};

exports.update = (req, res) => {
    console.log(req.query.stockId)
    AdminStock.findOneAndUpdate({_id:req.query.stockId}, {
        stockName :req.body.stockName,
        marketCap :req.body.marketCap,
        peRatio :req.body.peRatio,
        pbRatio:req.body.pbRatio,
        industryPE:req.body.industryPE,
        divYield:req.body.divYield,
        bookValue:req.body.bookValue,
        epsTTM:req.body.epsTTM,
        roe:req.body.roe,
        aboutCompany:req.body.aboutCompany,
        organization:req.body.organization,
        foundedYear:req.body.foundedYear,
        managingDirector:req.body.managingDirector,
        shareHoldingPattern:req.body.shareHoldingPattern,
        brandImg:req.body.brandImg,
        sector:req.body.sector,
        division:req.body.division,
        address:req.body.address,
        phone:req.body.phone,
        launchDate:req.body.launchDate,
        email:req.body.email,
        website:req.body.website
    },{new:true})
    .then(adminStock => {
        if(!adminStock) {
            return res.status(404).send({
                message: "Stock with this " + req.query.stockId
            });
        }
        res.send(adminStock);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Stock found with id " + req.query.stockId
            });                
        }
        return res.status(500).send({
            message: "Error updating Stock with id " + req.query.stockId
        });
    });
};

exports.delete = (req, res) => {
    console.log(req.query.stockId)
    AdminStock.findOneAndDelete({_id:req.query.stockId})
    .then(adminStock => {
        if(!adminStock) {
            return res.status(404).send({
                message: "Stock not found with id " + req.query.stockId
            });
        }
        res.send({message: "Stock deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Stock not found with id " + req.query.stockId
            });                
        }
        return res.status(500).send({
            message: "Could not delete Stock with id " + req.query.stockId
        });
    });
};