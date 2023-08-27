const connection = require('../connection');
const get = (req, res) => {
  // Retrieve all students from the database
  const sql = 'SELECT * FROM buyProperty';
  connection.query(sql, (error, results) => {
    if (error) {
      console.error('Error retrieving property to buy from the database:', error);
      res.status(500).json({ message: 'Error retrieving property to buy from the database' });
    } else {
      res.send(results);
    }
  });
}

module.exports = get;
