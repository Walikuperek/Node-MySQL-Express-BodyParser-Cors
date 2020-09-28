module.exports = app => {
  const Items = require('../controllers/item.controller');

  // Get all Items
  app.get('/items', Items.getAll);

  // Get Item by ID
  app.get('/items/:id', Items.getById);

  // Search by name
  app.get('/items/search/:name', Items.searchByName);

  // Select by type
  app.get('/items/type/:type', Items.searchByType);

  // Select by subType
  app.get('/items/subtype/:subtype', Items.searchBySubType);

  // Select by subSubType
  app.get('/items/subsubtype/:subsubtype', Items.searchBySubSubType);

};
