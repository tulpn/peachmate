const express = require("express")

const postsController = require("../controllers/posts/posts")

const router = express.Router();


router.get("/", postsController.getList)
router.get("/:page", postsController.getList)

router.get("/post/:id", postsController.getPost)
router.put("/post/:id", postsController.putPost)
router.delete("/post/:id", postsController.deletePost)
router.post("/post", postsController.postPost)

module.exports = router