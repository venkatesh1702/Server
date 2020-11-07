const mongoose = require('mongoose');

const adminMutualFund = mongoose.Schema({
    fundName:String,
    marketCap:String,
    risk:String,
    nav:String,
    minSIPAmount:String,
    minFirstInvestment:String,
    minSecondInvestment:String,
    exitLoad:String,
    fundStarted:String,
    expenseRatio:String,
    fundSize:String,
    rating:String,
    topHoldings:{
      type:[]
    },
    fundManagers:{
        type:[]
    },
    custodian:String,
    registerAndTransferAgent:String,
    address:String,
    email:String,
    website:String
},{
    timestamps: true
})

module.exports = mongoose.model('AdminMutualFund',adminMutualFund)