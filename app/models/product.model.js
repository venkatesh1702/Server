const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    productBrand: String,
    productName: String,
    productModel:String,
    productColor:String,
    MRPPrice: Number,
    RAM: Number,
    internalStorage: Number,
    battery: Number,
    os: String,
    frontCamera: Number,
    backCamera:Number,
    processor:String,
    boxIncludes:String,
    screenSize:Number,
    chargerType:String,
    manufacturer:String,
    displayType:String,
    splFeature:String,
    resolution:Number,
    itemWeight:Number,
    productImg:String,
    description:String
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);