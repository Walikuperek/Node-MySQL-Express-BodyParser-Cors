/* 
    INSERT INTO `orders`(`OrderID`, `ClientID`, `Price`, `Advance`, `Discount`, `Status`, `Year`, `Month`, `Day`) VALUES(NULL, '34', '400', '100', '0', 'UNPAID', '2020', '09', '17');
*/
const sql = require('./db.js');

// constructor
const Order = order => {
    this.id       = order.OrderID;
    this.clientID = order.ClientID;
    this.price    = order.Price;
    this.advance  = order.Advance;
    this.discount = order.Discount;
    this.status   = order.Status;
    this.year     = order.Year;
    this.month    = order.Month;
    this.day      = order.Day;
};

// Get all Orders from database
Order.selectAll = returnData => {
    sql.query(
        `
        SELECT orders.OrderID, clients.FirstName, clients.LastName, orders.Price, orders.Advance, orders.Discount, orders.Status, orders.Year, orders.Month, orders.Day
        FROM orders
        INNER JOIN clients ON orders.ClientID = clients.ClientID
        `, (err, response) => {
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

// Get all paid Orders from database
Order.selectPaid = returnData => {
    const PAID = 'PAID';
    sql.query(
        `
        SELECT orders.OrderID, clients.FirstName, clients.LastName, orders.Price, orders.Advance, orders.Discount, orders.Status, orders.Year, orders.Month, orders.Day
        FROM orders
        INNER JOIN clients ON orders.ClientID = clients.ClientID
        WHERE orders.Status = '${PAID}'
        `, (err, response) => {
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

// Get all Orders from database
Order.selectUnpaid = returnData => {
    const UNPAID = 'UNPAID';
    sql.query(
        `
        SELECT orders.OrderID, clients.FirstName, clients.LastName, orders.Price, orders.Advance, orders.Discount, orders.Status, orders.Year, orders.Month, orders.Day
        FROM orders
        INNER JOIN clients ON orders.ClientID = clients.ClientID
        WHERE orders.Status = '${UNPAID}'
        `, (err, response) => {
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

// Get Order by ID
Order.selectByClientId = (id, returnData) => {
    sql.query(
        `
        SELECT orders.OrderID, clients.FirstName, clients.LastName, orders.Price, orders.Advance, orders.Discount, orders.Status, orders.Year, orders.Month, orders.Day
        FROM orders
        INNER JOIN clients ON orders.ClientID = clients.ClientID
        WHERE orders.ClientID = '${id}'
        `, (err, response) => {
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

module.exports = Order;
