import React, { Component } from 'react'
import { FormCurso } from './form'
import { ListCurso } from './list'

export class CadastroCurso extends Component {
    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso />
                </div>
                <div className="col-md-6">
                    <ListCurso />
                </div>
            </div>
        )
    }
}