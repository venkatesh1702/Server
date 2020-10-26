module.exports = (app) => {
    const products = require('../controllers/product.controller');
    app.post('/api/products', products.create);
    app.get('/api/products', products.findAll);
}