// Socket.io singleton — import this anywhere to emit events
let io;

// userId → socketId map
const userSocketMap = {};

const initSocket = (server) => {
  const { Server } = require("socket.io");

  const allowedOrigins = process.env.FRONTEND_URL 
    ? process.env.FRONTEND_URL.split(",") 
    : ["http://localhost:5173"];

  console.log(`[Socket] Initializing with allowed origins:`, allowedOrigins);

  io = new Server(server, {
    cors: {
      origin: allowedOrigins,
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    // Client sends their userId after connecting
    socket.on("register", async (userId) => {
      if (userId) {
        userSocketMap[userId] = socket.id;
        console.log(`[Socket] User ${userId} connected → ${socket.id}`);

        // Automatically send initial unread count on connection
        try {
          const Notification = require("../models/NotificationModel");
          const count = await Notification.countDocuments({ userId, isRead: false });
          socket.emit("notification:count", { count });
        } catch (err) {
          console.error("[Socket] Error fetching initial count:", err);
        }
      }
    });

    socket.on("disconnect", () => {
      // Clean up the map on disconnect
      for (const [userId, socketId] of Object.entries(userSocketMap)) {
        if (socketId === socket.id) {
          delete userSocketMap[userId];
          console.log(`[Socket] User ${userId} disconnected`);
          break;
        }
      }
    });
  });

  return io;
};

// Emit an event to a specific user by userId
const emitToUser = (userId, event, data) => {
  if (!io) return;
  const socketId = userSocketMap[String(userId)];
  if (socketId) {
    io.to(socketId).emit(event, data);
  }
};

const getIo = () => io;

module.exports = { initSocket, emitToUser, getIo };
