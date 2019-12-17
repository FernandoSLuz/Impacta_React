import React, { Component } from 'react'
import { FormCurso } from './form'
import { ListCurso } from './list'
import axios from 'axios';
const URL = "http://localhost:3200/api/cursos"

export class CadastroCurso extends Component {

    initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA',
        cursos: []
    }

    state = { ...this.initialState, cursos: [] };

    constructor(props) {
        super(props);
        this.listar();
    }

    limpar() {
        this.setState(this.initialState);
    }

    /*listar = async () => {
        try{
            const response = await axios.get(URL);
            this.setState({cursos:response.data})
        }catch(erro){
            console.log(erro);
        }
    } */
    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data });
        }).catch(error => {
            console.log(error);
        });
    }
    descricaoChange(html) {
        console.log(html);
        this.setState({ descricao: html.target.value });
    }
    codigoChange(html) {
        console.log(html);
        this.setState({ codigo: html.target.value });
    }
    cargaHorariaChange(html) {
        console.log(html);
        this.setState({ cargaHoraria: html.target.value });
    }
    precoChange(html) {
        console.log(html);
        this.setState({ preco: html.target.value });
    }
    categoriaChange(html) {
        console.log(html);
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
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos} />
                </div>
            </div>
        )
    }
}