const mysql = require('mysql2');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'ShoppingMall'
});

db.connect ((err) => {
    if (err) throw err;
    console.log("MYSQL 연결 성공 !")
});

module.exports = db;
