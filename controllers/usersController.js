const {response,request} = require('express')
const usuarioGet= (req,res= response)=>{
    const {nombre,apellido,key=0,page=0} = req.query;
    res.json({
        msg: 'getApi-Controller',
        nombre,
        apellido,
        key,
        page,
    });
}
const usuarioPut= (req,res= response)=>{
    const id = req.params.id;
    res.json({
        msg: 'putApi-Controller',
        id
    });
}
const usuarioPost= (req=request,res= response)=>{
    const body = req.body;
    res.json({
        msg: 'postApi-Controller',
        body
    });
}
const usuarioDelete= (req,res= response)=>{
    res.json({
        msg: 'deleteApi-Controller'
    });
}

module.exports= {
    usuarioGet,
    usuarioDelete,
    usuarioGet,
    usuarioPut,
    usuarioPost
}