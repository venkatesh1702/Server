const Product = require('../models/product.model.js');


exports.create = (req, res) => {

    const product = new Product({
        productBrand: req.body.productBrand,
        productName: req.body.productName,
        productModel: req.body.productModel,
        productColor: req.body.productColor,
        MRPPrice: req.body.MRPPrice,
        RAM: req.body.RAM,
        internalStorage: req.body.internalStorage,
        battery: req.body.battery,
        os: req.body.os,
        frontCamera: req.body.frontCamera,
        backCamera: req.body.backCamera,
        processor: req.body.processor,
        screenSize: req.body.screenSize,
        chargerType: req.body.chargerType,
        manufacturer: req.body.manufacturer,
        displayType:req.body.displayType,
        splFeature:req.body.splFeature,
        resolution:req.body.resolution,
        itemWeight:req.body.itemWeight,
        productImg:req.body.productImg,
        description:req.body.description,
        boxIncludes:req.body.boxIncludes
    });

    // console.log(req.body)
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error"
            });
        });
};

exports.findAll = (req, res) => {
    Product.find()
    .then(products => {
        res.send(products);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Error"
        });
    });
};
