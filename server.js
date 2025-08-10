import { WebSocketServer } from 'ws';

const port = process.env.PORT || 8080;
const wss = new WebSocketServer({ port });

wss.on('connection', ws => {
  console.log('✅ Client connected');
  ws.send('Hello from Fly.io WebSocket server!');

  ws.on('message', message => {
    console.log('📩 Received:', message.toString());
    ws.send(`You said: ${message}`);
  });

  ws.on('close', () => console.log('❌ Client disconnected'));
});

console.log(`🚀 WebSocket server running on port ${port}`);
