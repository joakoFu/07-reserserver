const { Schema, model } = require('mongoose');
const UsuarioSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre tiene que ser obligatorio']
    },
    correo: {
        type: String,
        require: [true, 'El correo tiene que ser obligatorio'],
        unique: true
    },
    password: {
        type: String,
        require: [true, 'El contraseña tiene que ser obligatorio']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        require: [true, 'El rol tiene que ser obligatorio'],
        //enum: ['ADMIN_ROL','USER_ROL']

    },
    estado:{
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

UsuarioSchema.methods.toJSON = function() {
    const{__v, password,...usuario}= this.toObject();
    return usuario;
}

module.exports = model('Usuario',UsuarioSchema);