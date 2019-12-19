import React, { Component } from 'react'
import axios from 'axios'
import { FormCurso } from './form'
import { ListCurso } from './list'

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }
    
    state = {...this.initialState, cursos: []}

    trataSucesso(e, msg){
        this.limpar(e)
        this.listar()
        alert(msg)
    }
    
    trataErro(error, msg){
        console.log(error)
        alert(msg)
    }

    limpar(e){
        if(e){
            e.preventDefault()
        }
        this.setState(this.initialState)
    }

    constructor(props){
        super(props)
        this.listar()
    }

    /* listar = async () => {
        try{
            const response = await axios.get(URL)
            this.setState({cursos: response.data})
    } catch(erro){
        console.log(erro)
    }
} */

    listar(){
        axios.get(URL).then(response => {
            this.setState({cursos : response.data})
        }).catch(error => {
            console.log(error)
        })
    
    }

    codigoChange(e){
        this.setState({codigo: e.target.value})
    }

    descricaoChange(e){
        this.setState({descricao: e.target.value})
    }

    cargaChange(e){
        this.setState({cargaHoraria: e.target.value})
    }
    
    precoChange(e){
        this.setState({preco: e.target.value})
    }

    categoriaChange(e){
        this.setState({categoria: e.target.value})
    }

    registrarCurso(e){
        e.preventDefault()
        const {_id, codigo, descricao, cargaHoraria, preco, categoria} = this.state
        const body = {_id, codigo, descricao, cargaHoraria, preco, categoria}
        if(_id){
            axios.put(`${URL}/${_id}`, body).then(_ => {
                alert('Curso atualizado!')
                this.listar()
                this.limpar()
            }).catch(erro => {
                console.log(erro)
            })
        }else{
            axios.post(URL, body).then(response => {
                alert('Curso Adicionado com sucesso!')
                this.listar()
                this.limpar()
            }).catch(erro => {
                console.log(erro)
            })
        }
    }
    removerCurso(curso){
        if(window.confirm('Deseja realmente deletar este curso ?')){
            axios.delete(`${URL}/${curso._id}`)
            .then(_ => {
                alert('Curso deletado com sucesso!')
                this.listar()
            })
            .catch(error => {
                console.log(error)
                alert('Ocorreu um erro ao deletar o curso!')
            })
        }
    }
    consultarCurso(curso){
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })
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
                    carga={this.state.cargaHoraria}
                    cargaChange={this.cargaChange.bind(this)}
                    preco={this.state.preco}
                    precoChange={this.precoChange.bind(this)}
                    categoria={this.state.categoria}
                    categoriaChange={this.categoriaChange.bind(this)}
                    adicionarCurso={this.registrarCurso.bind(this)}
                    limparCampos={this.limpar.bind(this)}
                    isUpdate={this.state._id ? true : false}/>
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos}
                    removerCurso={this.removerCurso.bind(this)}
                    consultarCurso={this.consultarCurso.bind(this)}/>
                </div>
            </div>
        )
    }
}