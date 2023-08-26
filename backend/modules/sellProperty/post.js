const connection = require('../../connection')

const post = (req, res) => {
    // Create a new student in the database
    const { userType, contact, propertyDetail, propertyType, city, locality, bhk, balconies, totalFloor, currentFloor, furnishedStatus, superArea, carpetArea, possesionStatus, expectedPrice} = req.body;
    const sql = 'INSERT INTO postProperty (userType, contact, propertyDetail, propertyType, city, locality, bhk, balconies, totalFloor, currentFloor, furnishedStatus, superArea, carpetArea, possesionStatus, expectedPrice) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    connection.query(sql, [userType, contact, propertyDetail, propertyType, city, locality, bhk, balconies, totalFloor, currentFloor, furnishedStatus, superArea, carpetArea, possesionStatus, expectedPrice], (error, results) => {
      if (error) {
        // console.error('Error creating a new student in the database:', error);
        res.status(500).json({ message: 'Error posting property' });
      } else {
        res.send(results);
      }
    });
  } 
  
  module.exports = post;
