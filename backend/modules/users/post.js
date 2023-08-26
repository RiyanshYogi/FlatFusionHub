const connection = require('../../connection');

const post = (req,res) => {
    //creating a new user in the database

    const { type, name, email, password, mobile } = req.body;
    const sql = 'INSERT INTO users (type, name, email, password, mobile) VALUES (?,?,?,?,?)';
    connection.query(sql,[type, name, email, password, mobile],(error,result) => {
        if(error) {
            console.error("Error creating a new user in the database : ",error);
            res.status(500).json({message : "Error creating a new student in the database"});
        } else {
            res.send(result);
        }
    });
}

module.exports = post;
