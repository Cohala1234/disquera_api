const { populate } = require('../models/album.js');
const AlbumBD = require('../models/album.js');

class AlbumController{
    listAlbum(req, res) {
        AlbumBD.find().populate('_idArtista', {
            "noDocumento":1,
            "tipoDocumento":1,
            "nombreArtista":1,
            "apellidoArtista":1,
            "nombreArtistico":1,
            "feNacimArtista":1,
            "emailArtista":1,
            "estadoArtista":1
        }).populate('_idGenero', {
            "nombreGenero":1,
            "estadoGenero":1
        }).then( docs => {
            res.json({
                Albumes: docs
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos de los albumes"
            })
        })
    }

    listAlbumId(req, res) {
        var id = req.params.id;
        AlbumBD.findById(id).populate('_idArtista', {
            "noDocumento":1,
            "tipoDocumento":1,
            "nombreArtista":1,
            "apellidoArtista":1,
            "nombreArtistico":1,
            "feNacimArtista":1,
            "emailArtista":1,
            "estadoArtista":1
        }).populate('_idGenero', {
            "nombreGenero":1,
            "estadoGenero":1
        }).then( listId => {
            res.json({
                Album: listId
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos del album" + id
            })
        })
    }
    
    nuevoAlbum(req, res) {
        var album = new AlbumBD({
            _id: req.body._id,
            nombreAlbum: req.body.nombreAlbum,
            anioPublicacion: req.body.anioPublicacion,
            _idArtista: req.body._idArtista,
            _idGenero: req.body._idGenero,
            estadoAlbum: req.body.estadoAlbum});
    
        album.save().then( doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: "Error al crear un album"
            })
        })
    }
    
    actualizarAlbum(req, res) {
        AlbumBD.updateOne({_id: req.body._id}, {
            nombreAlbum: req.body.nombreAlbum, 
            anioPublicacion: req.body.anioPublicacion,
            _idArtista: req.body._idArtista,
            _idGenero: req.body._idGenero,
            estadoAlbum: req.body.estadoAlbum}).then( doc => {
            res.json({
                ok:true
            })
        }, err => {
            res.status(500).json({
                error: "Error al actualizar el status del documento album" + req.body._id
            })
        })
    }
}

module.exports = new AlbumController();