import React, { Component } from 'react'
import { FormCurso } from './form'
import { ListCurso } from './list'
import axios from 'axios';
const URL = "http://localhost:3200/api/cursos"

export class CadastroCurso extends Component {

    initialState = {
        _id : null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'INFORMATICA'
    }

    state = { form: this.initialState, cursos: [] };

    constructor(props) {
        super(props);
        this.listar();
    }

    limpar(html) {
        html.preventDefault();
        this.setState(this.initialState);
    }

    cadastrar(html) {
        html.preventDefault();
        const { _id, codigo, descricao, cargaHoraria, categoria, preco } = this.state;
        const body = { _id, codigo, descricao, cargaHoraria, categoria, preco };
        if(_id){
            axios.put(URL+"/"+_id, body).then(_ => {
                this.trataSucesso(html,'Curso Atualizado');
            }).catch(error => {
                this.trataErro(error, 'Ocorreu um erro ao atualizar o curso')
            });
        }else{
            axios.post(URL, body).then(_ => {
                this.trataSucesso(html,'Curso Adicionado');
            }).catch(error => {
                this.trataErro(error, 'Ocorreu um erro ao adicionar o curso')
            });
        }

    }
    listar() {
        axios.get(URL).then(response => {
            response.data.sort((a, b) => a.codigo - b.codigo);
            this.setState({ cursos: response.data });
        }).catch(error => {
            this.trataErro(error, '')
        });
    }
    remover(cursoJson) {
        if (window.confirm('Deseja excluir o curso?')) {
            const { _id } = cursoJson;
            axios.delete(URL + "/" + _id).then(response => {
                this.trataSucesso(cursoJson, 'Curso Removido');
            }).catch(error => {
                this.trataErro(error, 'Ocorreu um erro ao adicionar o curso');
            });
        }
    }
    consultar(cursoJson) {
        this.setState({
            _id: cursoJson._id,
            codigo: cursoJson.codigo,
            descricao: cursoJson.descricao,
            cargaHoraria: cursoJson.cargaHoraria,
            preco: cursoJson.preco,
            categoria: cursoJson.categoria
        })
    }
    trataErro(error, msg){
        console.log(error);
        if(msg !== ''){
            alert(msg);
        }
    }
    trataSucesso(evento, msg){
        alert(msg);
        this.listar();
        this.clearForm();
    }
    clearForm() {
        this.setState(this.initialState);
    }
    descricaoChange(html) {
        this.setState({ descricao: html.target.value });
    }
    codigoChange(html) {
        this.setState({ codigo: html.target.value });
    }
    cargaHorariaChange(html) {
        this.setState({ cargaHoraria: html.target.value });
    }
    precoChange(html) {
        this.setState({ preco: html.target.value });
    }
    categoriaChange(html) {
        this.setState({ categoria: html.target.value });
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}
                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}
                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}
                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}
                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}
                        clearForm={this.clearForm.bind(this)}
                        cadastrar={this.cadastrar.bind(this)}
                        isAtualizar={this.state._id ? true : false}
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso
                        cursos={this.state.cursos}
                        remover={this.remover.bind(this)}
                        consultar={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}




/*listar = async () => {
    try{
        const response = await axios.get(URL);
        this.setState({cursos:response.data})
    }catch(erro){
        console.log(erro);
    }
} */