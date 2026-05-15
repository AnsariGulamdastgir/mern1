const express = require("express")
const http = require("http")
const app = express()
const cors = require("cors")
require("dotenv").config() //load env file... using process

// Allowed frontend origins — always includes local dev + Render production
const ALLOWED_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://mern1-car-scout-frontend-main.onrender.com",
  ...(process.env.FRONTEND_URL
    ? process.env.FRONTEND_URL.split(",").map((o) => o.trim())
    : []),
];

app.use(express.json())
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (mobile apps, Postman, curl, etc.)
    if (!origin) return callback(null, true);
    if (ALLOWED_ORIGINS.includes(origin)) {
      return callback(null, true);
    }
    return callback(new Error(`CORS blocked: ${origin}`), false);
  },
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}))
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
app.use("/uploads", express.static("uploads"));

// Health-check / root route
app.get("/", (req, res) => {
    res.status(200).json({ status: "ok", message: "CarScout API is running" });
});

const DBConnection = require("./src/utils/DBConnection")
DBConnection()

const userRoutes = require("./src/routes/UserRoutes")
app.use("/user",userRoutes)

const carRoutes = require("./src/routes/CarRoutes")
app.use("/car",carRoutes)

const offerRoutes = require("./src/routes/OfferRoutes")
app.use("/offer",offerRoutes)

const notificationRoutes = require("./src/routes/NotificationRoutes");
app.use("/notification", notificationRoutes);

const messageRoutes = require("./src/routes/MessageRoutes")
app.use("/message",messageRoutes)

const testDriveRoutes = require("./src/routes/TestDriveRoutes")
app.use("/testdrive",testDriveRoutes)

const adminRoutes = require("./src/routes/AdminRoutes");
app.use("/admin", adminRoutes);

const authRoutes = require("./src/routes/AuthRoutes")
app.use("/auth",authRoutes)

const chatRoutes = require("./src/routes/ChatRoutes")
app.use("/chat", chatRoutes)

// Create HTTP server and attach Socket.io
const server = http.createServer(app)
const { initSocket } = require("./src/utils/socket")
initSocket(server)

const PORT = process.env.PORT
server.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
})
