const express = require("express")
const router = express.Router();

const {createComment} = require("../controllers/CommentController");
const {createPost, getAllPosts} = require("../controllers/postController");
const {likePost}=require("../controllers/likeController");

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPosts)
router.post("/likes/like",likePost);

module.exports = router;