const mysql = require('mysql2/promise');

// Tạo pool kết nối đến cơ sở dữ liệu
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'social_media_web'
});

module.exports = pool;