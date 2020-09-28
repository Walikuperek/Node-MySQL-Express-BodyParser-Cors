module.exports = app => {
    const Orders = require('../controllers/order.controller');

    // Get all Orders
    app.get('/orders', Orders.getAll);

    // Get all paid Orders
    app.get('/orders/paid', Orders.getAllPaid);

    // Get all unpaid Orders
    app.get('/orders/unpaid', Orders.getAllUnpaid);

    // Get Order by ID
    app.get('/orders/:id', Orders.getById);

};
