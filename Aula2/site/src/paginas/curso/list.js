import React, { Component } from 'react'

export class ListCurso extends Component {

    exibirLinhas() {
        //retorna a lista de props se existir
        const cursos = this.props.cursos || [];
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
                <td>{curso.cargaHoraria}</td>
                <td>{curso.preco}</td>
                <td>
                <button className="btn btn-success ml-3" 
                    onClick={() => this.props.consultar(curso)}>
                    <i className="fa fa-check"></i>
                </button>
                <button className="btn btn-danger ml-3" onClick={() => this.props.remover(curso)}>
                    <i className="fa fa-trash-o"></i>
                </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <div>
                <h3>Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Carga Horária</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}