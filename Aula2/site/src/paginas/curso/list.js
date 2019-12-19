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
                <td>
                    <button className="btn btn-success ml-3"
                        onClick={() => this.props.consultarCurso(curso)}>
                        <i className="fa fa-check"></i>
                    </button>
                    <button className="btn btn-danger"
                        onClick={() => this.props.removerCurso(curso)}>
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        return (
            <div>
                <h3 align="center">Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead align="center">
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                            <th>Carga Horaria</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody align="center">
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}