const Order = require('../models/order.model');

// Get all Orders from the database
exports.getAll = (req, res) => {
    Order.selectAll((err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving all Orders'
            }) :
            res.send(data);
    });
};

// Get all paid Orders from the database
exports.getAllPaid = (req, res) => {
    Order.selectPaid((err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving all paid Orders'
            }) :
            res.send(data);
    });
};

// Get all paid Orders from the database
exports.getAllUnpaid = (req, res) => {
    Order.selectUnpaid((err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving all unpaid Orders'
            }) :
            res.send(data);
    });
};

// Get Order by ID
exports.getById = (req, res) => {
    Order.selectByClientId(req.params.id, (err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || `Some error occured while retrieving Orders with ClientID: ${req.params.id}`
            }) :
            res.send(data);
    });
};