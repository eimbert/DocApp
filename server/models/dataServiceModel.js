const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');


let metodoSchema = new mongoose.Schema({
    parametro: String,
    descripcion: String
});

let servicioSchema = new mongoose.Schema({
    servicio: {
        type: String,
        required: [true, 'El servicio es necesario']
    },
    nombre: String,
    descripcion: String,
    graphQL: [metodoSchema]
    
});


//usuarioSchema.plugin(uniqueValidator, { message: '{PATH} debe de ser único' });
module.exports = mongoose.model('Servicios', servicioSchema);