const {response,request} = require('express')
const bcryptjs =require('bcryptjs');
const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');

const usuarioGet= async(req,res= response)=>{
    const{limite=5,desde=0} = req.query;
    const usuarios = await Usuario  .find({estado:true})
                                    .skip(desde)
                                    .limit(limite);

    //const total = await Usuario.countDocuments();
    //const totalUsuarioActivos = await Usuario.countDocuments({estado:true});
    const [totalActivo,total] =await Promise.all([
        Usuario.countDocuments({estado:true}),
        Usuario.countDocuments()
    ]);
    res.json({
        msg: 'getApi-Controller',
        total,
        totalActivo,
        usuarios
    });
}
const usuarioPut= async(req,res= response)=>{
    const {id} = req.params;

    const {_id,password,google,...resto}= req.body;

    //TODO validar contra base de datos
    if(password){
        const salt = bcryptjs.genSaltSync(10);
        resto.password= bcryptjs.hashSync(password,salt);   
    }

    const usuario = await Usuario.findByIdAndUpdate(id,resto);
    res.json({
        msg: 'putApi-Controller',
        id,
        usuario
    });
}
const usuarioPost= async(req=request,res= response)=>{
    //control de errores

    const {nombre,correo,password,rol} = req.body;
    const usuario = new Usuario({nombre,correo,password,rol});

    //valido si el correo existe
    /*const existeEmail = await Usuario.findOne({correo});
    if (existeEmail) {
        return res.status(400).json({
            msg: 'El correo ya esta registrado'
        });
    }*/
    // encriptar
    const salt = bcryptjs.genSaltSync(10);
    usuario.password= bcryptjs.hashSync(password,salt);
    await usuario.save();
    res.json({
        msg: 'Usuario creado exitosamente',
        usuario
    });
}

const usuarioDelete= async(req,res= response)=>{
    const {id} = req.params;
    console.log(`id: ${id}`);
    //fisicamente lo borramos
    const usuario = await Usuario.findByIdAndDelete(id);
    res.json({
        msg: `El usuario con id: ${id} ha sido eliminado`,
        usuario 
    });
}

module.exports= {
    usuarioGet,
    usuarioDelete,
    usuarioGet,
    usuarioPut,
    usuarioPost
}