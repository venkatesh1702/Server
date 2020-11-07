module.exports = (app) =>{
    const adminMutualFund = require('../controllers/adminMutualFund.controller')
    app.post('/api/adminMutualFund',adminMutualFund.create);
}