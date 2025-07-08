const {Router} = require ('express');
const{usuarioGet, usuarioPut, usuarioPost, usuarioDelete} = require('../controllers/usersController');
const router= Router();

router.get('/',usuarioGet);
router.put('/:id',usuarioPut);
router.post('/',usuarioPost);
router.delete('/',usuarioDelete);

module.exports = router;