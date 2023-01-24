const express = require('express');
const userRouter = express.Router();

const User = require('../react-tuto/models/user.model');


userRouter.post('/register', async (req, res) => {
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




module.exports = userRouter;




