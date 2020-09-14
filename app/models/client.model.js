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

// SEARCH FIELD
Client.searchForWord = (word, returnData) => {
    sql.query(
        `SELECT * FROM clients 
			WHERE 
				FirstName LIKE '%${word}%'
			OR	LastName LIKE '%${word}%'
            OR	Comment LIKE '%${word}%'
            OR	Email LIKE '%${word}%'
            OR  Country LIKE '%${word}%'
            OR  Facebook LIKE '%${word}%'
            OR  Instagram LIKE '%${word}%'
            OR  Vk LIKE '%${word}%'
            OR  Telegram LIKE '%${word}%'
            OR  Twitter LIKE '%${word}%'
            OR  Viber LIKE '%${word}%'
		`, (err, response) => {
            if (err) {
                console.table(err);
                returnData(null, err);
                return;
            }

            console.log(response);
            returnData(null, response);
        }
    );
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
    sql.query('INSERT INTO clients SET ?', Client, (err, res) => {
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

Client.selectById = (id, returnData) => {
    sql.query(
        `SELECT * FROM clients WHERE ClientID = ${id}`, (err, response) => {
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

// Update Client by ID
Client.updateById = (id, client, returnData) => {
  sql.query(
    `UPDATE clients 
        SET 
            ClientID = ?, FirstName = ?, LastName = ?, Comment = ?, Email = ?, Tel = ?, Country = ?, Facebook = ?, Instagram = ?, Telegram = ?, Twitter = ?, Viber = ?, Vk = ?, AddedDate = ? WHERE ClientID = ${id}`,
            [
                client.ClientID, client.FirstName, client.LastName, client.Comment, 
                client.Email, client.Tel, client.Country, client.Facebook, 
                client.Instagram, client.Telegram, client.Twitter, client.Viber, 
                client.Vk, client.AddedDate
            ],
    (err, res) => {
      if (err) {
        console.log({ err });
        returnData(null, err);
        return;
      }

      if (res.affectedRows == 0) {
        // not found client with the id
        returnData({ kind: 'not_found' }, null);
        return;
      }

      console.log('Updated client: ', { id: id, ...client });
      returnData(null, { id: id, ...client });
    }
  );
};

Client.remove = (id, returnData) => {
    console.log('\n\n\n', id, '\n\n\n');
    sql.query(`DELETE FROM clients WHERE ClientID = ${id}`, (err, res) => {
        if (err) {
        console.log({ err });
        returnData(null, err);
        return;
        }

        if (res.affectedRows == 0) {
        // Not found
        returnData({ kind: 'not_found' }, null);
        return;
        }

        console.log(`Deleted client with id: ${id}`);
        returnData(null, res);
    });
};

Client.removeAll = returnData => {
  sql.query('DELETE FROM clients', (err, res) => {
    if (err) {
      console.log({ err });
      returnData(null, err);
      return;
    }

    console.log(`res: ${res}\n\nDeleted ${res.affectedRows} clients`);
    returnData(null, res);
  });
};
/*
    SQL Row - first INSERT
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
*/
module.exports = Client;