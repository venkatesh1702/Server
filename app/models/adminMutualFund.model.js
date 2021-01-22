const mongoose = require('mongoose');

const adminMutualFund = mongoose.Schema({
    fundName:String,
    marketCap:Number,
    risk:String,
    nav:Number,
    minSIPAmount:Number,
    minFirstInvestment:Number,
    minSecondInvestment:Number,
    exitLoad:String,
    fundStarted:String,
    expenseRatio:String,
    fundSize:String,
    rating:Number,
    fundLaunchDate: String,
    investingSector: String,
    fundCompany: String,
    sipAvailable: String,
    lumpsumAvailable: String,
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