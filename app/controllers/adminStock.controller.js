const AdminStock = require('../models/adminStock.model');
const multer = require('multer');


exports.create = (req,res)=>{
    
    console.log(req.file)
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
        custodian:req.body.custodian,
        registerAndTransferAgent:req.body.registerAndTransferAgent,
        address:req.body.address,
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
}

