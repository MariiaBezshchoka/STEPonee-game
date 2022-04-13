// Зависимости
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');
var app = express();
var server = http.Server(app);
var io = socketIO(server);
const PORT = process.env.PORT ?? 3000

app.set('port', PORT);
app.use('/static', express.static(__dirname + '/static'));

// Маршруты
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запуск сервера
server.listen(PORT, () => {
    console.log(`Запускаю сервер на порте ${PORT}...`);
});

// Обработчик веб-сокетов
io.on('connection', (socket) => {
});

setInterval(() => {
    io.sockets.emit('message', 'hi!');
}, 1000);