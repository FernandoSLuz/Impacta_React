const port = 3200;

//middlewares - singletons: commons js
const bodyParser = require('body-parser');
const express = require('express');

const server = express();//novo servidor

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({extended : true}));

//considera o formato json no corpo da requisição
server.use(bodyParser.json());

server.listen(port, function(){
    console.log(`Servidor no ar na porta ${port}`)
})