require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnection = require('./utils/dbConnection');
const Csivava = require('./models/Csivava');

const app = express();
const PORT = process.env.PORT || 3700;
const adatok = require('./public/js/adatok');

app.use(cors());

dbConnection()
    .then(() => {
        console.log('Sikeres adatbázis csatlakozás!');
        app.listen(PORT, () => {
            console.log(`http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });


app.get('/dogs/csivavas', async (req, res) => {
    const adatok = await Csivava.find({});
    // console.log(adatok);
    
    try {
        res.statusCode = 200;
        return res.json({ adatok });
    } catch (error) {
        res.statusCode = 500;
        return res.json({msg: 'Valami hiba történt!'});
    }
});