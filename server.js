const express = require('express');

const app = express();

const rooms = {
    rooms: [],
    messages: ['hello'],
}; // комнаты и их сообщения с их id

app.get('/rooms', function(req, res) { //res - что передает сервер(мы), req - что передает клиент
    res.json(rooms);
});

app.listen(7777);