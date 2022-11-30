const ArtistaBD = require('../models/artista.js');

class ArtistaController{
    listArtista(req, res) {
        ArtistaBD.find().then( docs => {
            res.json({
                Artistas: docs
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos de los artista"
            })
        })
    }

    listArtistaId(req, res) {
        var id = req.params.id;
        ArtistaBD.findById(id).then( listId => {
            res.json({
                Artista: listId
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos del artista" + id
            })
        })
    }
    
    nuevoArtista(req, res) {
        var artista = new ArtistaBD({
            _id: req.body._id,
            noDocumento: req.body.noDocumento,
            tipoDocumento: req.body.tipoDocumento,
            nombreArtista: req.body.nombreArtista,
            apellidoArtista: req.body.apellidoArtista,
            nombreArtistico: req.body.nombreArtistico,
            feNacimArtista: req.body.feNacimArtista,
            emailArtista: req.body.emailArtista,
            estadoArtista: req.body.estadoArtista
        });
    
        artista.save().then( doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: "Error al crear un artista"
            })
        })
    }
    
    actualizarArtista(req, res) {
        ArtistaBD.updateOne({_id: req.body._id}, {
            noDocumento: req.body.noDocumento,
            tipoDocumento: req.body.tipoDocumento,
            nombreArtista: req.body.nombreArtista,
            apellidoArtista: req.body.apellidoArtista,
            nombreArtistico: req.body.nombreArtistico,
            feNacimArtista: req.body.feNacimArtista,
            emailArtista: req.body.emailArtista,
            estadoArtista: req.body.estadoArtista}).then( doc => {
            res.json({
                ok:true
            })
        }, err => {
            res.status(500).json({
                error: "Error al actualizar el status del documento artista" + req.body._id
            })
        })
    }
}

module.exports = new ArtistaController();