var mysql = require('mysql2');

var con = mysql.createConnection({
    host: 'botmysqlerb.mysql.database.azure.com',
    user: 'nirmalaagash@botmysqlerb',
    password: 'bigdata1234T',
    port: '3306',
    ssl: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to DataBase!");
});

