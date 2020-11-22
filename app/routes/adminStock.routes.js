module.exports = (app)=>{
   const adminStock = require('../controllers/adminStock.controller')
   app.post('/api/adminStock/add',adminStock.save);
   app.get('/api/adminStock/list',adminStock.list);
   app.get('/admin/stock',adminStock.findOne);
   app.put('/api/adminStock/update',adminStock.update);
   app.delete('/api/adminStock/delete',adminStock.delete);
}

