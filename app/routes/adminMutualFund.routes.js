module.exports = (app) =>{
    const adminMutualFund = require('../controllers/adminMutualFund.controller')
    app.post('/api/adminMutualFund/add',adminMutualFund.save);
    app.get('/api/adminMutualFund/list',adminMutualFund.list);
    app.get('/api/adminMutualFund/edit',adminMutualFund.findOne);
    app.put('/api/adminMutualFund/update',adminMutualFund.update);
    app.delete('/api/adminMutualFund/delete',adminMutualFund.delete);
}