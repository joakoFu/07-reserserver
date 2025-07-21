const mongoose = require('mongoose');

const dbConnection = async() =>{

    try{
        console.log(process.env.URL_MONGO);
        mongoose.connect(process.env.URL_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then;
        console.log('Base de datos online!!!');
    }catch(error){
        console.error(`Error en la conexion mongo: ${error}`);
        throw new Error('Error al iniciar bbdd Mongo');
    }
};

module.exports = {
    dbConnection
}