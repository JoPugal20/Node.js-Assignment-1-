const net = require('net');
const client = new net.Socket();
const PORT = 8080;
const HOST = '127.0.0.1';
client.connect(PORT, HOST, () => {
    console.log(`Connected to server at ${HOST}:${PORT}`);
        client.write('Hello, Server!');
});
client.on('data', (data) => {
    console.log(`Received from server: ${data}`);
});
client.on('end', () => {
    console.log('Disconnected from server');
});
client.on('error', (err) => {
    console.error(`Client error: ${err.message}`);
});