const AdminStock = require('../models/adminStock.model');
const multer = require('multer');


exports.create = (req, res) => {
console.log(req.body);
    const adminStock = new AdminStock({

        stockName: req.body.stockName,
        marketCap: req.body.marketCap,
        peRatio: req.body.peRatio,
        pbRatio: req.body.pbRatio,
        industryPE: req.body.industryPE,
        divYield: req.body.divYield,
        bookValue: req.body.bookValue,
        epsTTM: req.body.epsTTM,
        roe: req.body.roe,
        aboutCompany: req.body.aboutCompany,
        organization: req.body.organization,
        foundedYear: req.body.foundedYear,
        managingDirector: req.body.managingDirector,
        shareHoldingPattern: req.body.shareHoldingPattern,
        brandImg: req.body.brandImg,
        sector: req.body.sector,
        division: req.body.division,
        address: req.body.address,
        phone: req.body.phone,
        launchDate: req.body.launchDate,
        email: req.body.email,
        website: req.body.website
    })
    
    adminStock.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        })
}

exports.list = (req, res) => {
    AdminStock.find()
        .then((adminStock) => {
            res.status(200).json(adminStock);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
}

exports.findOne = (req,res) => {
    AdminStock.findById(req.query.stockId)
    .then(adminStock => {
        if(!adminStock) {
            return res.status(400).json("stock not found");
        }
        res.status(200).json({data:adminStock})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
};

exports.update = (req, res) => {
    const adminStock = {
        stockName: req.body.stockName,
        marketCap: req.body.marketCap,
        peRatio: req.body.peRatio,
        pbRatio: req.body.pbRatio,
        industryPE: req.body.industryPE,
        divYield: req.body.divYield,
        bookValue: req.body.bookValue,
        epsTTM: req.body.epsTTM,
        roe: req.body.roe,
        aboutCompany: req.body.aboutCompany,
        organization: req.body.organization,
        foundedYear: req.body.foundedYear,
        managingDirector: req.body.managingDirector,
        shareHoldingPattern: req.body.shareHoldingPattern,
        brandImg: req.body.brandImg,
        sector: req.body.sector,
        division: req.body.division,
        address: req.body.address,
        phone: req.body.phone,
        launchDate: req.body.launchDate,
        email: req.body.email,
        website: req.body.website
    }

    AdminStock.findByIdAndUpdate({ _id: req.query.stockId }, adminStock,{new:true})
    .then(adminStock => {
        res.status(200).json({data:adminStock, msg:"Stock Updated Successfully!"});
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}

exports.delete = (req,res) => {
    AdminStock.findByIdAndDelete(req.query.stockId)
    .then(data => {
        res.status(200).json({msg:"Stock Deleted Successfully!"})
    })
    .catch(err => {
        res.status(500).json({
            message: err.message || "Error"
        })
    })
}


