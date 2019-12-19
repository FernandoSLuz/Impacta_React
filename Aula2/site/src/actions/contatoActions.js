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

export const telOnChange = function(event){
    return {
        type: 'ATUALIZAR_TEL',
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
    return{
        type: 'LIMPAR'
    }
}