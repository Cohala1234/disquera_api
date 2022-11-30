const express = require('express');
const acotrl = require('../controller/albumController.js');

class Album {
    constructor() {
        this.app = express();

        this.app.get("/album", acotrl.listAlbum);
        this.app.get("/album/:id", acotrl.listAlbumId);
        this.app.post("/album", acotrl.nuevoAlbum);
        this.app.put("/album", acotrl.actualizarAlbum);
    }
}
module.exports = new Album().app;