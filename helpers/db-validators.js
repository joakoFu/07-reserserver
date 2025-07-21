const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async (rol='')=>{
        const existeRol = await Role.findOne({rol});
        console.log(`rol: ${existeRol}`);
        if (!existeRol) {
            throw new Error(`El rol ${rol} no está registrado`);
        }
}
const idExiste = async (id ='')=>{
    console.log(`idExiste process`);
    const usuario = awaitUsuario.findById(id);
    if (!usuario) {
        console.log(`Usuario existe`);
        throw new Error(`El id ${id} no existe`);
    }
    return usuario;
}
const emailExiste = async (correo='')=>{
    const existeEmail = await Usuario.findOne({correo});   
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está registrado`);
    }
}   


module.exports = {
    esRolValido,
    emailExiste,
    idExiste
}