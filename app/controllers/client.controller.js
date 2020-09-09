const Client = require('../models/client.model');

// Get all Cartridges from the database
exports.getAll = (req, res) => {
    Client.selectAll((err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving all Clients' }) 
            : res.send(data);
    });
};

// Create and Save a new Client
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }
    console.log(`req.body from 'client.controller:'`)
    console.table(req.body);
 
    // Create a Client
    const client = new Client({
        ClientID: req.body.ClientID,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Comment: req.body.Comment,
        Email: req.body.Email,
        Tel: req.body.Tel,
        Country: req.body.Country,
        Facebook: req.body.Facebook,
        Instagram: req.body.Instagram,
        Telegram: req.body.Telegram,
        Twitter: req.body.Twitter,
        Viber: req.body.Viber,
        Vk: req.body.Vk,
        AddedDate: req.body.AddedDate    
    });

    // Save Client in the database
    Client.create(client, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Client'
            });
        else res.send(data);
    });
};
