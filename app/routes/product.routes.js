module.exports = (app) => {
    const products = require('../controllers/product.controller');
    app.post('/api/products', products.create);

    app.put('/api/products/:productId', products.update);
}