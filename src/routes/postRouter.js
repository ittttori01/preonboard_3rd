const express = require("express");
const router = express.Router();

const postController = require("../controllers/postController");

router.get("/list",postController.getList);
router.post("/register",postController.registerPost);

module.exports = { router };