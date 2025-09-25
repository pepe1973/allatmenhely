const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
    nev: {
        type: String,
        required: true
    },
    fajta: {
        type: String,
        required: true
    },
    neme: {
        type: String,
        required: true
    },
    kor: {
        type: Number
    },
    ivartalanitott: {
        type: Boolean
    },
    kepek: [{
        type: String  
    }]
}, {
    timestamps: true
});

const catModel = mongoose.model('cat', catSchema);

module.exports = catModel;