const app = require('./app');
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const PORT = process.env.PORT;

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('a user disconnected');
	});
});

server.listen(PORT, () => {
	console.log(`server listening on port ${PORT}`);
});
