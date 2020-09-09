const Item = require('../models/item.model');

// Get all Items from the database
exports.getAll = (req, res) => {
  	Item.selectAll((err, data) => {
		err
      		? res.status(500).send({
        		message: err.message || 'Some error occurred while retrieving all Items' })
      		: res.send(data);
  	});
};

// Get Item by ID
exports.getById = (req, res) => {
  	Item.selectById(req.params.id, (err, data) => {
    	err 
			? res.status(500).send({
				message: err.message || `Some error occured while retrieving Item with an id: ${req.params.id}` })
			: res.send(data);
  	});
};

// For search field
exports.searchByName = (req, res) => {
  	Item.selectByName(req.params.name, (err, data) => {
		err
			? res.status(500).send({
				message: err.message || `Some error occured while searching Item with name: ${req.params.name}` })
			: res.send(data);
	});
};

// For left-nav-bar - Type click
exports.searchByType = (req, res) => {
	Item.selectByType(req.params.type, (err, data) => {
		err
			?
			res.status(500).send({
				message: err.message || `Some error occured while searching Item with name: ${req.params.type}`
			}) :
			res.send(data);
	});
};

// For left-nav-bar - SubType click
exports.searchBySubType = (req, res) => {
	Item.selectBySubType(req.params.subtype, (err, data) => {
		console.log(req.params.subtype);
		err
			?
			res.status(500).send({
				message: err.message || `Some error occured while searching Item with name: ${req.params.subtype}`
			}) :
			res.send(data);
	});
};

// For left-nav-bar - SubSubType click
exports.searchBySubSubType = (req, res) => {
	Item.selectBySubSubType(req.params.subsubtype, (err, data) => {
		console.log(req.params.subsubtype);
		err
			?
			res.status(500).send({
				message: err.message || `Some error occured while searching Item with name: ${req.params.subsubtype}`
			}) :
			res.send(data);
	});
};