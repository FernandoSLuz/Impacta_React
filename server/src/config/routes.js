const express = require('express');

module.exports = function (server){
    //definir a URL base para todas as rotas
    const router = express.Router();

    server.use('/api', router);
    
    //rotas relacionadas as operações com cursos e contatos
    const cursos = require('../api/cursos');
    const contatos = require('../api/contatos');

    cursos.register(router, '/cursos');
    contatos.register(router, '/contatos');
};