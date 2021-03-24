const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todolist"
});

db.connect((error) => {
    if(error) throw error;
});

module.exports = db;