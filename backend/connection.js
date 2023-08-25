const mysql = require('mysql');
//importing mysql module

//creating mysql connection with local environment

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root123',
    database : 'reyansh'
})

connection.connect((error) => {
    if(error) console.error("Error connecting to the database");
    else console.log("connected successfully to the database");

});

module.exports = connection;