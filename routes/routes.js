const express = require('express');
const { createPost, getPost, getPosts, deletePost, updatePost } = require('../react-tuto/controllers/postController');
const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.get('/posts/:id', getPost);
router.delete('/posts/:id', deletePost);
router.patch('/posts/:id', updatePost);

module.exports = router;




