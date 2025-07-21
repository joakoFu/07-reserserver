const express = require('express');
const cors = require('cors');
const usuariosPath ='/api/user';
const{dbConnection}= require ('../database/config');
class Server{
    constructor(){
        this.app= express();
        this.port = process.env.PORT;
        //Conexion BBDD
        this.conectarDB();
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
    async conectarDB(){
        await dbConnection();
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