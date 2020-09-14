module.exports = app => {
    const Client = require('../controllers/client.controller.js');

    // Get all Clients
    app.get('/clients', Client.getAll);

    // Create new Client
    app.post("/clients", Client.create);

    // Get Client by ClientID
    app.get('/clients/:id', Client.getById);
    
    // Search by word
    app.get('/clients/search/:word', Client.searchByWord);

    // Update Client with ClientID
    app.put('/clients/:id', Client.update);

    // Delete Client with ClientID
    app.delete('/clients/:id', Client.delete);

    // Delete all Clients
    app.delete('/clients', Client.deleteAll);
}