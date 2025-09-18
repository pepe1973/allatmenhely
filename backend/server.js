require('dotenv').config();
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3700;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});

app.get('/dogs/csivavas', (req, res) => {
    try {
        res.statusCode = 200;
        return res.json({msg: 'Kutyák/csivavas'});
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: 'Valami hiba történt!'});
    }
});