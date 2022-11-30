const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var generoSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    nombreGenero: {
        type: String,
        required: true
    },
    estadoGenero: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('GeneroBD', generoSchema);