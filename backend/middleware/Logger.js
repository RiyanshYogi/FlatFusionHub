const connection = require('../connection');
//importing our connection module, 

//creating logger middleware

const Logger = (req,res,next) => {
    const url = req.url;
    const method = req.method;
    const remoteAddress = req.socket.remoteAddress;

    const sql = 'INSERT INTO logs (url,method,address) VALUES (?,?,?)';
    connection.query(sql,[url,method,remoteAddress],(error,result) => {
        if(error) console.error("Error : ",error)
    });

    next();
}

module.exports = Logger;