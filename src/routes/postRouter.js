const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/list",postController.getList);
router.post("/register",postController.registerPost);
router.put("/edit", postController.editPost);
router.delete("/delete",postController.deletePost);

module.exports = { router };