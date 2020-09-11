const express = require("express")

const postsController = require("../controllers/posts")

const router = express.Router();


router.get("/", postsController.getList)
router.get("/post", postsController.getPost)
router.post("/post", postsController.postPost)

module.exports = router