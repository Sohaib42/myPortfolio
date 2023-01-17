const express = require('express');
const router = express.Router();

const Post = require('./react-tuto/models/tutorial.model');
const User = require('./react-tuto/models/user.model');


router.post('/register', (req, res) => {
    const newUser = new User({
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password
    });

    newUser.save()
        .then(user => {
            res.status(201).json({ message: 'Inscription réussie !', user });
        })
        .catch(error => {
            res.status(500).json({ error });
        });
});


router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).send({
            posts,
        });
        console.log(posts);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            err: error,
        });
    }
});

router.post('/posts', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    });
    await post.save();
    res.send(post);
});

module.exports = router;




