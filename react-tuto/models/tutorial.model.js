const mongoose = require("mongoose");

const schema = mongoose.Schema({
	title: String,
	content: String,
	postImage: String,
	postNumber: Number,
	isDeleted: Boolean
})

module.exports = mongoose.model("Post", schema);