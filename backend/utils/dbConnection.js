const mongoose = require('mongoose');

async function dbConnection() {
    const kapcsolat = await mongoose.connect(process.env.DBSTRING);

    return kapcsolat;
}

module.exports = dbConnection;
