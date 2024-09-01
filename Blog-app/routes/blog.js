const express = require("express")
const router = express.Router()

const {createComment,updateComment,showComment}= require("../controllers/commentController")

const {createPost,updatePost,deletePost,showPost} = require("../controllers/postController")

const {createLike,deleteLike,showLike} = require("../controllers/likeController")

// router.get("comment",showComment)
router.get("/post",showPost)
// router.get("likes",showLike)
router.post("/comment/create",createComment)
router.post("/like/create",createLike)
router.post("/post/create",createPost)

module.exports = router