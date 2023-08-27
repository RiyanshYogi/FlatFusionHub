const connectionMongo = require('mongoose');

const url ="mongodb://localhost:27017/Property";

connectionMongo.connect(url, function(err, db){
    if(err){
        console.error('Error connecting to the MongoDB:', err);
    }
    else{
        console.log("Connected to MongoDB");
    }
})
