const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

class App {
    constructor() {
        this.app = express();

        this.app.use( require('body-parser').json() );

        this.database();
        this.routes();

        this.app.listen(process.env.PORT || 3000, function() {
            console.log('Servidor encendido ' + process.env.PORT || 3000);
        });
    }

    database() {
        mongoose.connect("mongodb+srv://admin:admin1234@disquera.ohloger.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true});
        mongoose.connection.on('error', function() {
            console.log("Se produjo un error al conectarse a la base de datos");
        })
    }

    routes() {
        this.app.use(express.static(__dirname+'/public'))

        this.app.set('view engine', 'ejs');
        this.app.set('views', __dirname + '/views')

        this.app.use( require('./routes/principal.js'));
        this.app.use( require('./routes/genero.js') );
        this.app.use( require('./routes/album.js') );
        this.app.use( require('./routes/artista.js') );
        this.app.use( require('./routes/principal.js'))

        
    }
}

new App();