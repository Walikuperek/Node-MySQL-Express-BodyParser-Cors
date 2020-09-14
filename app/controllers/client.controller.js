const Client = require('../models/client.model');

// Get all Cartridges from the database
exports.getAll = (req, res) => {
    Client.selectAll((err, data) => {
        err
            ?
                res.status(500).send({
                message: err.message || 'Some error occurred while retrieving all Clients' }) 
            : 
                res.send(data);
    });
};

// Get Item by ID
exports.getById = (req, res) => {
    Client.selectById(req.params.id, (err, data) => {
        err
            ?
                res.status(500).send({
                    message: err.message || `Some error occured while retrieving Client with an id: ${req.params.id}` }) 
            :
                res.send(data);
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

// For search field
exports.searchByWord = (req, res) => {
    Client.searchForWord(req.params.word, (err, data) => {
        err
            ?
            res.status(500).send({
                message: err.message || `Some error occured while searching: ${req.params.word}`
            }) :
            res.send(data);
    });
};

// Update a Client identified by the ClientID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({
            message: 'Content can not be empty!'
        });
    }

    console.log(` << req.body`);
    console.log(req.body);
    console.log(` << req.params.id`);
    console.log(req.params.id);

    Client.updateById(req.params.id, new Client(req.body),
        (err, data) => {
        if (err) {
            if (err.kind === 'not_found') {
            res.status(404).send({
                message: `Not found - client with id: ${req.params.id}`
            });
            } else {
            res.status(500).send({
                message: `Error - updating client with id: ${req.params.id}`
            });
            }
        } else res.send(data);
        }
    );
};

// Delete a Client with the specified ClientID in the request
exports.delete = (req, res) => {
  Client.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === 'not_found') {
        res.status(404).send({
          message: `Not found Client with id: ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: `Could not delete Client with id: ${req.params.id}`
        });
      }
    } else res.send({ message: `_ClientID: ${req.params.id}__Client was deleted successfully__` });
  });
};

// Delete all Clients from the database
exports.deleteAll = (req, res) => {
  Client.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all clients."
      });
    else res.send({ message: `All Clients were deleted successfully!` });
  });
};