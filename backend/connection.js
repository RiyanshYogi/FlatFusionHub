const mysql = require('mysql');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: "127.0.0.1",
  port: 3306,
  user: "root",
  password: "utsav",
  database: "Property"
});

// Connect to the MySQL server
connection.connect((error) => {
  if (error) {
    console.error('Error connecting to the mySQL database:', error);
  } else {
    console.log('Connected to the mySQL database');
  }
});

module.exports = connection;
