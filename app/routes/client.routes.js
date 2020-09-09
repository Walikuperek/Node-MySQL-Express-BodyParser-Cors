module.exports = app => {
    const Client = require('../controllers/client.controller.js');

    // Get all Clients
    app.get('/clients', Client.getAll);

    // Create a new Customer
    app.post("/clients", Client.create);
    
}