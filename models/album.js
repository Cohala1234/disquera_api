const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var albumSchema = new Schema({
    _id: {
        type: Number,
        required: true
    },
    nombreAlbum: {
        type: String,
        required: true
    },
    anioPublicacion: {
        type: Date,
        required: true
    },
    _idArtista: [
        {
            type: Schema.Types.Number,
            ref: 'ArtistaBD'
        }
    ],
    _idGenero: [
        {
            type: Schema.Types.Number,
            ref: 'GeneroBD'
        }
    ],
    estadoAlbum : {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('AlbumBD', albumSchema);