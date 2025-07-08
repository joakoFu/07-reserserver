const express = require('express');
const cors = require('cors');
const usuariosPath ='/api/user';
class Server{
    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        //Middlewares
        this.app.use(cors()); 
        this.middlewares();
        //lectura y parseo  json
        this.app.use(express.json());
        //path
        this.usuariosPath = '/api/user';
        //rutas de mis aplicaciones 

        this.routes();
    }
    middlewares(){
        //Directorio Publico
        this.app.use(express.static('public'));
    }
    routes(){
       this.app.use(usuariosPath,require('../routers/user'));

    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log(`Puerto: ${this.port}`);
        });
    }
}

module.exports= Server;