const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');




let metodoSchema = new mongoose.Schema({
    parametro: String,
    descripcion: String
});

let graphQLSchema = new mongoose.Schema({
    llamada: String,
    parametros: String,
    devuelve: String
});

let servicioSchema = new mongoose.Schema({
    servicio: String,
    nombre: String,
    descripcion: String,
    graphQL: [graphQLSchema]    
});


module.exports = mongoose.model('data_service', servicioSchema);