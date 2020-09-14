# Node-MySQL-Express-BodyParser-Cors
##### REST API
Node.js backend for Tattoo Studio project


###### work in progress

## REST routes
> Items
```
/items               // get all items (GET)
```
```
/items/:id           // get item by id (GET)
```
```
/items/search/:name  // search (search field) (GET)
```
```
/items/type/:type    // get by type (GET)
```
```
/items/subtype/:subtype       // get by subtype (GET)
```
```
/items/subsubtype/:subsubtype // get by subsubtype (GET)
```

> Clients
```
/clients              // get all clients (GET)
```
```
/clients              // post a client into database (POST)
```
```
/clients/:id          // get a client by id (GET)
```
```
/clients/search/:word // search (search field) (GET)
```
```
/clients/:id          // update client with id (PUT)
```
```
/clients/:id          // delete client with id (DELETE)
```
```
/clients              // delete all clients (DELETE)
```

## NPM packages
* server: express
* database connection: mysql
* CORS: cors
* data-parser: body-parser

#### Studio CRM tech stack - MySQL, Express, Angular, Node.js, RxJS
* [Node-MySQL-Express-BodyParser-Cors](https://github.com/Walikuperek/Node-MySQL-Express-BodyParser-Cors)
* mysql database
* [angular frontend](https://github.com/Walikuperek/Angular-9.1.0-Tattoo-Studio-CRM)
* [Web-Scrap-Puppeteer-MySQL](https://github.com/Walikuperek/Web-Scrap-Puppeteer-MySQL) as a database filler
* [Angular RxJS](https://angular.io/guide/rx-library) for sending data between components

### Example row from '/items' route 
```
TextRow
{ 
 ID: 150,
 Shop: 'KWADRON',
 Name: 'KWADRON Cartridge System 0.35mm FL - Flat - 1szt',
 ImgSrc: 'https://www.kwadron.pl/6635-large_default/kwadron-cartridge-system-035mm-fl-flat-1szt.jpg',
 Description: 'Najwyższej jakości cartridge KWADRON o średnicy 0.35mm FL Flat. Cartridge dedykowane do cieniowania i wypełnień, idealne do dużych, szerokich powierzchni, szczególnie do geometrycznych form. Igły w tych cartridgach ułożone są w jednym rzędzie.',
 PriceNetto: '5,40 zł',
 PriceBrutto: '6,64 zł',
 Link: 'https://www.kwadron.pl/pl/kwadron-cartridge-system-035mm-fl-flat-1szt.html'
}
```
### Example row from '/clients' route
```
┌───────────┬───────────────────────────────────────────────────────────┐
│  (index)  │                          Values                           │
├───────────┼───────────────────────────────────────────────────────────┤
│ ClientID  │                            '1'                            │
│ FirstName │                          'Cycu'                           │
│ LastName  │                         'Walczi'                          │
│  Comment  │                    'Cycum non cycere'                     │
│   Email   │                'walikupere@onetore.eureka'                │
│    Tel    │                         376669666                         │
│  Country  │                         'Poland'                          │
│ Facebook  │ 'https://www.facebook.com/profile.php?id=100014391284754' │
│ Instagram │                            ''                             │
│ Telegram  │                            ''                             │
│  Twitter  │                            ''                             │
│   Viber   │                            ''                             │
│    Vk     │                            ''                             │
│ AddedDate │                       '2020-09-08'                        │
└───────────┴───────────────────────────────────────────────────────────┘
```

### Example error handling
```
┌─────────┬────────────────────┬───────┬─────────────────────────────────────────────┬──────────┬───────┬───────────────────────────┐
│ (index) │        code        │ errno │                 sqlMessage                  │ sqlState │ index │            sql            │
├─────────┼────────────────────┼───────┼─────────────────────────────────────────────┼──────────┼───────┼───────────────────────────┤
│  error  │ 'ER_NO_SUCH_TABLE' │ 1146  │ "Table 'inventory.items' doesn't exist"     │ '42S02'  │   0   │   'SELECT * FROM items'   │
└─────────┴────────────────────┴───────┴─────────────────────────────────────────────┴──────────┴───────┴───────────────────────────┘
```

### Project pre-setup
```
make mysql database named - inventory
make table at 'inventory' - items
make 
```

### Structure of database
```
*--DB: inventory
|
|
*----TABLE: items
|______________ID: INT(11) AI PRIMARY KEY
|___________Shop: STRING/TEXT
|___________Name: STRING/TEXT
|_________ImgSrc: STRING/TEXT
|____Description: STRING/TEXT
|_____PriceNetto: STRING/TEXT
|____PriceBrutto: STRING/TEXT
|___________Link: STRING/TEXT
|
|
*----TABLE: clients
|_______ClientId: INT AI PRIMARY KEY
|______FirstName: VARCHAR(255) 
|_______LastName: VARCHAR(255)  
|________Comment: VARCHAR(255) 
|__________Email: VARCHAR(255)        
|____________Tel: INT          
|________Country: VARCHAR(255)      
|_______Facebook: VARCHAR(255)     
|______Instagram: VARCHAR(255)    
|_______Telegram: VARCHAR(255)     
|________Twitter: VARCHAR(255)      
|__________Viber: VARCHAR(255)        
|_____________Vk: VARCHAR(255)           
|______AddedDate: DATE    
```

### Project setup
```
npm install
```

### Run
```
node server.js
```

For more detail, please visit my website:
> [QUAK BLOG](http://quak.com.pl)
