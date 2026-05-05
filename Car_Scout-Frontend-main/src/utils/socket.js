import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_API_URL || "http://localhost:3800";
console.log("[Socket] Connecting to:", SOCKET_URL);

// Singleton socket instance
const socket = io(SOCKET_URL, {
  autoConnect: false, // Don't connect until user is logged in
});

export default socket;
