const mysql = require("mysql2/promise");

const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Mayuraj@390',
    database: 'student_db'
});

module.exports = mysqlPool;