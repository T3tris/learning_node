const express = require('express');
const app = express();

const PORT = 3000;

app.listen(PORT);

app.get('/public', (req, res, next) => {
    app.use(express.static('public'));
    console.log('the port is ', PORT);
    const moods = {
        "happy":"food",
        "sad":"no food"
    }

    res.send(moods);
});