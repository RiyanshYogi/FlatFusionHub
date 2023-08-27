const MongoClient = require('mongodb').MongoClient;

const url = "mongodb://0.0.0.0:27017";
const databaseName = "Property";

MongoClient.connect(url, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log("Connection failed for some reason");
  }
  console.log("Connection established - All well");
  const db = client.db(databaseName);
});
  



