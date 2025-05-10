const pool = require('../config/db');

class Comment {

    static async findByPostId(postId) {
        const [rows] = await pool.query(`
            SELECT comments.*, users.username, users.avatar_url
            FROM comments
            JOIN users ON comments.user_id = users.id 
            WHERE post_id = ?
            ORDER BY comments.created_at DESC
        `, [postId]);
        return rows;
    }

    static async findByUserId(userId) {
        const [rows] = await pool.query(`
            SELECT comments.*, users.username, users.avatar_url
            FROM comments
            JOIN users ON comments.user_id = users.id 
            WHERE user_id = ?
            ORDER BY comments.created_at DESC
        `, [userId]);
        return rows;
    }
}

module.exports = Comment;