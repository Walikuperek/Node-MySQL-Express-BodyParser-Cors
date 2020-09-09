const sql = require('./db.js');

// constructor
const Item = item => {
	this.id           = item.ID;
	this.type 		  = item.Type;
	this.subtype 	  = item.SubType;  
  	this.name         = item.Name;
	this.imgSrc       = item.ImgSrc;
	this.description  = item.Description;
	this.priceNetto   = item.PriceNetto;
	this.priceBrutto  = item.PriceBrutto;
	this.link         = item.Link; 
};

// Select all from database
Item.selectAll = returnData => {
	sql.query(
		'SELECT * FROM items', (err, response) => {
			if (err) {
				console.table({ error: err });
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

// Get Item by ID
Item.selectById = (id, returnData) => {
	sql.query(
		`SELECT * FROM items WHERE ID = ${id}`, (err, response) => {
			if (err) {
				console.table({ error: err });
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

// Get Item by Name - SEARCH FIELD FOR ALL
Item.selectByName = (name, returnData) => {
	sql.query(
		`SELECT * FROM items 
			WHERE 
				Name LIKE '%${name}%'
			OR	Type LIKE '%${name}%'
			OR	SubType LIKE '%${name}%'
			OR	SubSubType LIKE '%${name}%'
		`, (err, response) => {
			if (err) {
				console.table({ error: err });
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

// Get Items by Type
Item.selectByType = (type, returnData) => {
	sql.query(
		`SELECT * FROM items WHERE Type LIKE '%${type}%'`, (err, response) => {
			if (err) {
				console.table({
					error: err
				});
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

// Get Items by SubType
Item.selectBySubType = (subType, returnData) => {
	sql.query(
		`SELECT * FROM items WHERE SubType LIKE '%${subType}%'`, (err, response) => {
			if (err) {
				console.table({
					error: err
				});
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

// Get Items by SubSubType
Item.selectBySubSubType = (subSubType, returnData) => {
	sql.query(
		`SELECT * FROM items WHERE SubSubType LIKE '%${subSubType}%'`, (err, response) => {
			if (err) {
				console.table({
					error: err
				});
				returnData(null, err);
				return;
			}

			console.log(response);
			returnData(null, response);
		}
	);
};

module.exports = Item;
