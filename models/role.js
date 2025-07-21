const {Schema, model} = require('mongoose');
const RoleSchema = Schema({
    rol:{
    type: String,
    require: [true, 'El rol tiene que ser obligatorio']
}
});

module.exports = model('Role', RoleSchema);