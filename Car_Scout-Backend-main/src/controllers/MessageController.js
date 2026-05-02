const Message = require("../models/MessageModel");

// CREATE MESSAGE
const createMessage = async (req, res) => {
    try{
        const message = await Message.create(req.body)

        res.status(201).json({
            message: "Message sent",
            data: message
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

// GET ALL MESSAGES
const getAllMessages = async (req, res) => {
    try{
        const messages = await Message
            .find()
            .populate("senderId")
            .populate("receiverId")
            .populate("carId")

        res.status(200).json({
            message: "Messages fetched",
            data: messages
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

// GET SINGLE MESSAGE (🔥 ADD)
const getMessageById = async (req,res)=>{
    try{
        const message = await Message
            .findById(req.params.id)
            .populate("senderId receiverId carId")

        res.status(200).json({
            message:"Message fetched",
            data:message
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

// UPDATE MESSAGE
const updateMessage = async (req, res) => {
    try{
        const message = await Message.findByIdAndUpdate(
            req.params.id,
            req.body,
            { returnDocument: 'after' }
        )

        res.status(200).json({
            message: "Message updated",
            data: message
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

// DELETE MESSAGE
const deleteMessage = async (req, res) => {
    try{
        await Message.findByIdAndDelete(req.params.id)

        res.status(200).json({
            message: "Message deleted"
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

// MARK AS READ (IMPORTANT FEATURE)
const markAsRead = async (req,res)=>{
    try{
        const message = await Message.findByIdAndUpdate(
            req.params.id,
            { isRead:true },
            { new:true }
        )

        res.status(200).json({
            message:"Message marked as read",
            data:message
        })
    } catch (err) {
        console.error("MESSAGE CONTROLLER ERROR:", err);
        res.status(500).json({ 
            message: "Internal Server Error", 
            error: err.message 
        });
    }
}

module.exports = {
    createMessage,
    getAllMessages,
    getMessageById,
    updateMessage,
    deleteMessage,
    markAsRead
}
















