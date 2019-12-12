//criando o schema
const restful = require('node-restful');
//const {mongoose} = require('node-restful');
const Schema = restful.mongoose.Schema;

//definindo o schema curso
const contatoSchema = new Schema({
    data: { type: Date, required: true},
    nome: { type: String, required: true},
    email: { type: String, required: true},
    telefone: { type: Number},
    assunto: { type: String}   
});

module.exports = restful.model(`contato`, contatoSchema);