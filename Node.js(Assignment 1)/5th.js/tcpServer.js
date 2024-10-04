const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Received from client: ${data}`);
        socket.write(`Server received: ${data}`);
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    socket.on('error', (err) => {
        console.error(`Socket error: ${err.message}`);
    });
});

const PORT = 8080;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log(`Server listening on ${HOST}:${PORT}`);
});