const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    brandName: String,
    category: String,
    size: Number,
    dealerName: String,
    mobileNumber: Number,
    mailId: String,
    amountPaid: Number,
    amountBalance: Number
}, {
    timestamps: true
});

module.exports = mongoose.model('Product', ProductSchema);