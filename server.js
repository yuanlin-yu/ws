// server.js
import express from "express";
import { WebSocketServer } from "ws";

const app = express();
const PORT = process.env.PORT || 3001;

// HTTP 端口
const server = app.listen(PORT, () => {
  console.log(`HTTP & WS server running on port ${PORT}`);
});

// 创建 WebSocket 服务器
const wss = new WebSocketServer({ server });

wss.on("connection", (ws) => {
  console.log("Client connected");
  ws.send("Welcome to Fly.io WS Server!");

  ws.on("message", (msg) => {
    console.log(`Received: ${msg}`);
    ws.send(`Echo: ${msg}`);
  });

  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

app.get("/", (req, res) => {
  res.send("WebSocket Server is running");
});
