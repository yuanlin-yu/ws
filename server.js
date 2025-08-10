import { WebSocketServer } from 'ws';

const port = process.env.PORT || 8080;
const wss = new WebSocketServer({ port });

wss.on('connection', (ws) => {
  console.log('✅ 客户端已连接');

  ws.on('message', (message) => {
    console.log(`📩 收到消息: ${message}`);
    ws.send(`服务器收到: ${message}`);
  });

  ws.on('close', () => {
    console.log('❌ 客户端断开连接');
  });
});

console.log(`🚀 WebSocket 服务器已启动，端口 ${port}`);
