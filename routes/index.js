const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Trang chủ: Hiển thị tất cả bài đăng
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.render('index', { posts });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Trang tìm kiếm
router.get('/search', async (req, res) => {
    const q = req.query.q || ''; // Lấy tham số tìm kiếm từ URL (?q=...)
    
    try {
        if (!q.trim()) {
            return res.render('search', { users: [], query: '', posts: [] });
        }
        
        // Tìm kiếm người dùng
        const users = await User.findByUsername(q);
        // Tìm kiếm bài viết
        const posts = await Post.findByContent(q);
        
        // Render trang search.ejs với kết quả
        res.render('search', { 
            users, 
            posts, 
            query: q 
        });
    } catch (error) {
        console.error('Lỗi tìm kiếm:', error);
        res.status(500).send('Server Error');
    }
});

// Trang đăng nhập
router.get('/login', (req, res) => {
    res.render('login');
});

// Trang đăng ký
router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;