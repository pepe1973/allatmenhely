const mongoose = require('mongoose');

const csivavaSchema = new mongoose.Schema({
    cim: {
        type: String,
        required: true
    },
    tartalom: {
        type: String,
        required: true
    },
    kep: [{
        type: String,
        required: true
    }]
}, {
    timestamps: true
});

const CsivavaModel = mongoose.model('csivava', csivavaSchema);

module.exports = CsivavaModel;