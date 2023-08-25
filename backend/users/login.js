const connection = require('../connection');
//importing the database connection module

const jwt = require('jsonwebtoken');

const login = (req,res) => {
    //createing a new user in the database

    const {username,password} = req.body;
    const sql = 'SELECT COUNT(*) as cnt FROM users WHERE username = ? AND password = ?';
    connection.query(sql,[username,password],(error,result) => {
        if(error) {
            console.log(error);
            res.status(404).json({message : "invalid username or password"});
        } else {
            let count = JSON.parse(JSON.stringify(result))[0].cnt; 
            if(count == 1) {
                const token = jwt.sign({username : username},"secret-key", {expiresIn : "1h"});
                res.json({ token });
            } else {
                return res.status(403).json({message : "unauthorised!!"});
            }
        }
    })
}

module.exports = login;