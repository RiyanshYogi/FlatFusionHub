const connection = require('../connection'); // Import the database connection module
const jwt = require("jsonwebtoken"); // Import the JSON Web Token library

// Define a middleware function named Auth
const Auth = (req, res, next) => {
    const url = req.url; // Get the URL from the incoming request
    
    // Check if the URL does not contain 'students'
    if (url.indexOf('students') == -1) {
        return next(); // If not 'students', move to the next middleware or route handler
    }
    
    try {
        const token = req.headers.authorization.split(" ")[1]; // Get the JWT token from the request's headers
        const decoded = jwt.verify(token, "secret-key"); // Decode the token using a secret key
        
        // Prepare an SQL query to check if a user with the decoded username exists
        const sql = "SELECT count(*) AS cnt FROM users WHERE Username = '" + decoded.username + "'";
        
        // Execute the SQL query using the database connection
        connection.query(sql, (error, results) => {
            if (error) {
                return res.status(403).json({message:"Unauthorised!!!"}); // If there's an error, respond with an error message
            } else {
                let count = JSON.parse(JSON.stringify(results))[0].cnt; // Parse the query result to get the count value
                if (count == 1) {
                    return next(); // If the count is 1, move to the next middleware or route handler
                } else {
                    return res.status(403).json({message:"Unauthorised!!!"}); // If the count is not 1, respond with an error message
                }
            }
        });
    } catch (error) {
        console.log(error); // If there's an error during token decoding, log it
        return res.status(403).json({message:"Unauthorised!!!"}); // Respond with an error message
    }
}

module.exports = Auth; // Export the Auth middleware function
