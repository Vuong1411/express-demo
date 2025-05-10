const pool = require('../config/db');

class Post {
    static async findAll() {
        const [rows] = await pool.query(`
            SELECT posts.*, users.username, users.avatar_url
            FROM posts
            JOIN users ON posts.user_id = users.id 
            ORDER BY posts.created_at DESC
        `);
        return rows;
    }

    static async findByUsername(username) {
        const [rows] = await pool.query(`
            SELECT posts.*, users.username, users.avatar_url 
            FROM posts 
            JOIN users ON posts.user_id = users.id 
            WHERE users.username LIKE ?
            ORDER BY posts.created_at DESC
        `, [`%${username}%`]);
        
        return rows;
    }

    static async findByContent(content) {
    const [rows] = await pool.query(`
        SELECT posts.*, users.username, users.avatar_url 
        FROM posts 
        JOIN users ON posts.user_id = users.id 
        WHERE posts.body LIKE ?
        ORDER BY posts.created_at DESC
    `, [`%${content}%`]);
    
    return rows;
}
}

module.exports = Post;