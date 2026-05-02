const router = require("express").Router()
const chatController = require("../controllers/ChatController")

router.post("/", chatController.chat)   //localhost:3800/chat

module.exports = router
