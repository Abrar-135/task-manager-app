const mysql = require('mysql2');

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'mysql',
    user: process.env.DB_USER || 'taskuser',
    password: process.env.DB_PASSWORD || 'taskpassword135$',
    database: process.env.DB_NAME || 'taskmanager',
    port: process.env.DB_PORT || 3306
}).promise();

module.exports = pool;


