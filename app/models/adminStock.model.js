const mongoose = require('mongoose')

const adminStockSchema = mongoose.Schema({
    stockName :String,
    marketCap :Number,
    peRatio :Number,
    pbRatio:Number,
    industryPE:Number,
    divYield:Number,
    bookValue:Number,
    epsTTM:Number,
    roe:Number,
    aboutCompany:String,
    organization:String,
    foundedYear:Number,
    managingDirector:String,
    shareHoldingPattern:String,
    brandImg:String,
    sector:String,
    division:String,
    address:String,
    phone:String,
    launchDate:String,
    email:String,
    website:String
},
{
    timestamps: true
})

module.exports = mongoose.model('AdminStock',adminStockSchema)