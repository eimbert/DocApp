const express = require('express');

const bcrypt = require('bcrypt');
const _ = require('underscore');
const cors = require('cors');

const DataService = require('../models/dataServices');

const app = express();
app.use(cors());

app.get('/dataService', function(req, res) {
    DataService.find({}).exec((err, servicios) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        console.log("Me lo pide lo sirvo...");
        res.json({
            ok: true,
            servicios
        });
    });
});

// app.post('/usuario', function(req, res) {
//     let body = req.body;
//     let servicio = new DataService({
//         servicio: body.servicio,
//         nombre: body.nombre,
//         descripcion: body.descripcion
//     });
//     servicio.save((err, servicioDB) => {
//         if (err) {
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }

//         res.json({
//             ok: true,
//             servicio: servicioDB
//         });
//     });
// });

// app.put('/usuario/:id', function(req, res) {

//     let id = req.params.id;
//     let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

//     Usuario.findByIdAndUpdate(id, body, { new: true, runValidators: true }, (err, usuarioDB) => {

//         if (err) {
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         }



//         res.json({
//             ok: true,
//             usuario: usuarioDB
//         });

//     })

// });

// app.delete('/usuario/:id', function(req, res) {


//     let id = req.params.id;

//     // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {

//     let cambiaEstado = {
//         estado: false
//     };

//     Usuario.findByIdAndUpdate(id, cambiaEstado, { new: true }, (err, usuarioBorrado) => {

//         if (err) {
//             return res.status(400).json({
//                 ok: false,
//                 err
//             });
//         };

//         if (!usuarioBorrado) {
//             return res.status(400).json({
//                 ok: false,
//                 err: {
//                     message: 'Usuario no encontrado'
//                 }
//             });
//         }

//         res.json({
//             ok: true,
//             usuario: usuarioBorrado
//         });

//     });



// });


module.exports = app;