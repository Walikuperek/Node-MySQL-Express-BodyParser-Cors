const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/* 
 Set port for app
  You have access to process.env object, 
  You can override it like: `PORT=4000 node server.js` 
*/
const PORT = process.env.PORT || 3000;
const app = express();

var corsOptions = {
  origin: 'http://localhost:4200'
};

app.use(cors(corsOptions));

// parse req => content-type-application/json
app.use(bodyParser.json());

// parse req => content-type-application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
  extended: true
}));

// Simple route
app.get('/', (req, res) => {
  res.json({ message: 'Backend for TATTOO CRM, author: Kacper Walczak' });
  res.setHeader('Access-Control-Allow-Origin', `localhost:${PORT}`);
});

require('./app/routes/item.routes')(app);
require('./app/routes/client.routes')(app);
require('./app/routes/order.routes')(app);

// Listen for requests
app.listen(PORT, () => {
  console.log(`Server is running, port: ${PORT}.`);
});


/* 

INSERT INTO `clients`(`ClientID`, `FirstName`, `LastName`, `Comment`, `Email`, `Tel`, `Country`, `Facebook`, `Instagram`, `Telegram`, `Twitter`, `Viber`, `Vk`, `AddedDate`) VALUES('0', 'Kacper', 'Walczak', 'Twój mąż kochanie.', 'walikuperek@onet.eu', '515624369', 'Poland', 'https://www.facebook.com/profile.php?id=100014391284754', '', '', '', '', '', '2020-09-09');

*/