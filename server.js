import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (socket, request) => {
  const ip = request.socket.remoteAddress;

  socket.on('message', (rawData) => {
    const message = rawData.toString();
    console.log("🚀 ~ rawData:", rawData);

    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(`Server BroadCast ${ip}: ${message}`);
      }
    });
  });

  socket.on('error', (error) => {
    console.error(`WebSocket error ${ip}: ${error}`);
  });

  socket.on('close', () => {
    console.log(`Client ${ip} disconnected`);
  });
});

console.log("WebSocket server is running on ws://localhost:8080");
