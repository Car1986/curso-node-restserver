const express = require('express')
const cors = require('cors')

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoutePath = '/api/usuarios';

        //Middlewares
        this.middlewares();

        //Parseo y lectura del body
        this.app.use( express.json() );

        //Rutax de la aplicacion
        this.routes();
    }   

    middlewares() {
        // CORS
        this.app.use( cors() );
        // Directorio publico
        this.app.use( express.static('public') )
    }

    routes(){
        this.app.use(this.usuariosRoutePath, require('../routes/user'))
    }

    listen(){
        this.app.listen(process.env.PORT, () => {
            console.log('Servidor corriendo en puerto', process.env.PORT);
        });
    }

}

module.exports = Server;