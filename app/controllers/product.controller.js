const Product = require('../models/product.model.js');


exports.create = (req, res) => {

    const product = new Product({
        brandName: req.body.brandName,
        category: req.body.category,
        size: req.body.size,
        dealerName: req.body.dealerName,
        mobileNumber: req.body.mobileNumber,
        mailId: req.body.mailId,
        amountPaid: req.body.amountPaid,
        amountBalance: req.body.amountBalance
    });

    console.log(req.body)
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

exports.update = (req, res) => {
    Product.findByIdAndUpdate(req.params.productId, {
        brandName: req.body.brandName,
        category: req.body.category,
        size: req.body.size,
        dealerName: req.body.dealerName,
        mobileNumber: req.body.mobileNumber,
        mailId: req.body.mailId,
        amountPaid: req.body.amountPaid,
        amountBalance: req.body.amountBalance
    }, {new: true})
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error updating product with id " + req.params.productId
        });
    });
};
exports.findOne = (req, res) => {
    Product.findById(req.params.productId)
    .then(product => {
        if(!product) {
            return res.status(404).send({
                message: "Note not Product with id " + req.params.productId
            });            
        }
        res.send(product);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Product not found with id " + req.params.productId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving product with id " + req.params.productId
        });
    });
};
