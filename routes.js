const express = require("express");
const Post = require("./react-tuto/models/tutorial.model");
const User = require("./react-tuto/models/user.model");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/isUserAuth", verifyJWT, (req, res) => {
    return res.json({isLoggedIn: true, username: req.user.username})
})

router.post("/register",async(req,res)=>{
        const user = req.body;
        const takenUsername = await User.findOne({username: user.username});
        const takenEmail = await User.findOne({email: user.email});
        if(takenUsername || takenEmail){
            res.json({message:"Username or email has already been taken"})
        }else{
            user.password = await bcrypt.hash(req.body.password, 10)
            
            const dbUser = new User({
                username: user.username.toLowerCase(),
                email: user.email.toLowerCase(),
                password: user.password
            })
            dbUser.save()
            res.json({message:"Success"})
        }
})

router.post("/login",(req,res)=>{
    const userLoggingIn = req.body;

    User.findOne({username: userLoggingIn.username})
    .then(dbUser=>{
        if(!dbUser){
            return res.json({
                message:"Invalid Username or Password"
            })
        }
        bcrypt.compare(userLoggingIn.password,dbUser.password)
        .then(isCorrect=>{
            if(isCorrect){
            const payload = {
                id: dbUser._id,
                username: dbUser.username
            }
            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                {expiresIn: 86400},
                (err, token) =>{
                    if(err)return res.json({message: err})
                    return res.json({
                        message: 'Success',
                        token: "Bearer " + token
                    })
                }
            )
            }else{
            return res.json({
                message:"Invalid Username or Password"
            })
        }
    })
})
})
function verifyJWT(req,res,next){
    const token = req.headers["x-access-token"]?.split(' ')[1]
    if (token){
        jwt.verify(token, process.env.PASSPORTSECRET,(err,decoded)=>{
            if(err)return res.json({
                isLoggedIn: false,
                message: "Failed to Authenticate"
            })
            req.user={};
            req.user.id = decoded.id;
            req.user.username = decoded.username;
            next();
        })
    }else{
        res.json({message:"Incorrect Token Given", isLoggedIn: false})
    }
}

router.get("/posts",async(req,res)=>{
    try
    {
    const posts = await Post.find()
    res.status(200).send({
        posts
    });
    }
    catch(error)
    {
        console.log(error);
        res.status(404).json({
            status: 'fail',
            err: error,
        });
    }
})
router.post("/posts", async (req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content,
        postImage: req.body.postImage
	})
	await post.save();
	res.send(post);
})

module.exports = router;
