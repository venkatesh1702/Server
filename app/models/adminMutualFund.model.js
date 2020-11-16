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
    fundLaunchDate: String,
    topHoldings:{
      type:[]
    },
    fundManagers:{
        type:[]
    },
    
    fundPhone: String,
    fundAddress:String,
    fundEmail:String,
    fundWebsite:String
},{
    timestamps: true
})

module.exports = mongoose.model('AdminMutualFund',adminMutualFund)