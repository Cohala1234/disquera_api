const express = require('express');
const arcotrl = require('../controller/artistaController.js');

class Artista {
    constructor() {
        this.app = express();

        this.app.get("/artista", arcotrl.listArtista);
        this.app.get("/artista/:id", arcotrl.listArtistaId);
        this.app.post("/artista", arcotrl.nuevoArtista);
        this.app.put("/artista", arcotrl.actualizarArtista);
    }
}
module.exports = new Artista().app;