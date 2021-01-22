module.exports = (app) =>{
    const adminMutualFund = require('../controllers/filterMutualFund.controller')
    app.get('/api/data/filterMutualFund',adminMutualFund.findOneByFundName);
}