const express = require('express');
const gcotrl = require('../controller/generoController.js');

class Genero {
    constructor() {
        this.app = express();

        this.app.get("/genero", gcotrl.listGenero);
        this.app.get("/genero/:id", gcotrl.listGeneroId);
        this.app.post("/genero", gcotrl.nuevoGenero);
        this.app.put("/genero", gcotrl.actualizarGenero);
    }
}
module.exports = new Genero().app;