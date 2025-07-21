const {Router} = require ('express');
const{usuarioGet, usuarioPut, usuarioPost, usuarioDelete} = require('../controllers/usersController.js');
const { check } = require('express-validator');
const validarCampos = require('../middlewares/validar-campos.js');
const router= Router();
const Role = require('../models/role.js');
const { esRolValido,emailExiste,idExiste} = require('../helpers/db-validators.js');

router.get('/',usuarioGet);
router.put('/:id',
    check('id','No es un id valido').isMongoId(),
    check('id').custom(idExiste),
    check('rol').custom(esRolValido),
    check('correo').custom(emailExiste),
    validarCampos,
    usuarioPut);
router.post('/',
    check('correo','el correo no es valido').isEmail(),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debe de ser mas de 6 letras').isLength({min:6}),
    //check('rol','No es un rol permitido').isIn(['ADMIN_ROL','USER_ROL']).not().isEmpty(),
    check('rol').custom(esRolValido),
    check('correo').custom(emailExiste),
    validarCampos,
    usuarioPost);
router.delete('/:id',
    check('id','No es un id valido').isMongoId(),
    check('id').custom(idExiste),
    usuarioDelete);

module.exports = router;