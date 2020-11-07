module.exports = (app)=>{
   const adminStock = require('../controllers/adminStock.controller')
   app.post('/api/adminStock',adminStock.create);
   
   
}

