const express = require('express');

const app = express();

app.get('/users', function(req, res) {
    console.log('Hello');
    res.send('ответ');
});

app.listen(7777);