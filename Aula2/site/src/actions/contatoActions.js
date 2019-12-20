import axios from 'axios'
const URL = 'http://localhost:3200/api/contatos'

export const dataOnChange = function(event){
    return {
        type: 'ATUALIZAR_DATA',
        value: event.target.value
    }
}

export const nomeOnChange = function(event){
    return {
        type: 'ATUALIZAR_NOME',
        value: event.target.value
    }
}

export const emailOnChange = function(event){
    return {
        type: 'ATUALIZAR_EMAIL',
        value: event.target.value
    }
}

export const telefoneOnChange = function(event){
    return {
        type: 'ATUALIZAR_TELEFONE',
        value: event.target.value
    }

}

export const assuntoOnChange = function(event){
    return {
        type: 'ATUALIZAR_ASSUNTO',
        value: event.target.value
    }
}

export const limpar = function(event){
    if(event){
        event.preventDefault();
    }
    return{
        type: 'LIMPAR_FORM'
    }
}

export const adicionar = function(data, nome, email, telefone, assunto){
    return (dispatch) => {
        return axios.post(URL,{
            data,
            nome,
            email,
            telefone,
            assunto
        })
        .then(_ =>{
            alert('Contato enviado!')
            dispatch({
                type : 'LIMPAR_FORM'
            })
        })
        .catch(error => {
            console.log(error);
            alert('Erro ao salvar contato');
        });
    }
}