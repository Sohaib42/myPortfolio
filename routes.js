const express = require("express")
const Post = require("./react-tuto/models/tutorial.model")
const router = express.Router()

router.get("/posts",async(req,res)=>{
    try{
    const posts = await Post.find()
    res.status(200).json({
        status:'success',
        data:{
            data: posts
        }
    })
    }catch(error){
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
	})
	await post.save()
	res.send(post)
})

module.exports = router
