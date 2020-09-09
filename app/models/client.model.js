const sql = require('./db.js');

const Client = function (Client) {
    this.ClientID     = Client.ClientID;
    this.FirstName    = Client.FirstName;
    this.LastName     = Client.LastName;
    this.Comment      = Client.Comment;
    this.Email        = Client.Email;
    this.Tel          = Client.Tel;
    this.Country      = Client.Country;
    this.Facebook     = Client.Facebook;
    this.Instagram    = Client.Instagram;
    this.Telegram     = Client.Telegram;
    this.Twitter      = Client.Twitter;
    this.Viber        = Client.Viber;
    this.Vk           = Client.Vk;
    this.AddedDate    = Client.AddedDate;
};

Client.selectAll = returnData => {
    sql.query(
        'SELECT * FROM clients', (err, response) => {
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

Client.create = (Client, returnData) => {
    sql.query("INSERT INTO clients SET ?", Client, (err, res) => {
        if (err) {
            console.log("error: ", err);
            returnData(err, null);
            return;
        }

        console.log(`\n`);
        console.table({ ...Client });
        console.log(`\n`);
        returnData(null, { ...Client });
    });
};
/*
    SQL for first INSERT
    ┌───────────┬───────────────────────────────────────────────────────────┐
    │  (index)  │                          Values                           │
    ├───────────┼───────────────────────────────────────────────────────────┤
    │ ClientId  │                         undefined                         │
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

    `INSERT INTO clients(
        ClientID, FirstName, LastName, Comment, Email, Tel, Country, Facebook, Instagram, Telegram, Twitter, Viber, Vk, AddedDate) 
    VALUES(
        '0 ', 
        'Kacper ', 
        'Walczak ', 
        'Twój mąż kochanie.', 
        'walikuperek @onet.eu ', 
        '515624369 ', 
        'Poland ', 
        'https: //www.facebook.com/profile.php?id=100014391284754', 
        '', '', '', '', '', 
        '2020-09-09'
    );`, 
*/
module.exports = Client;