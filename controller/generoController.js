const GeneroBD = require('../models/genero.js');

class GeneroController{
    listGenero(req, res) {
        GeneroBD.find().then( docs => {
            res.json({
                Generos: docs
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos de genero"
            })
        })
    }

    listGeneroId(req, res) {
        var id = req.params.id;
        GeneroBD.findById(id).then( listId => {
            res.json({
                Genero: listId
            })
        }, err => {
            res.status(500).json({
                error: "Error al listar los documentos del genero" + id
            })
        })
    }
    
    nuevoGenero(req, res) {
        var genero = new GeneroBD({
            _id: req.body._id,
            nombreGenero: req.body.nombreGenero,
            estadoGenero: req.body.estadoGenero
        });
    
        genero.save().then( doc => {
            res.json({
                ok: true
            })
        }, err => {
            res.status(500).json({
                error: "Error al crear un genero"
            })
        })
    }
    
    actualizarGenero(req, res) {
        GeneroBD.updateOne({_id: req.body._id}, {nombreGenero: req.body.nombreGenero, estadoGenero: req.body.estadoGenero}).then( doc => {
            res.json({
                ok:true
            })
        }, err => {
            res.status(500).json({
                error: "Error al actualizar el status de un documento genero" + req.body._id
            })
        })
    }
}

module.exports = new GeneroController();