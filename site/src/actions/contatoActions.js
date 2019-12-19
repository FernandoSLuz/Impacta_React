export const dataOnChange = function(e){
    return {
        type: 'ATUALIZAR_DATA',
        value: e.target.value
    }
}

export const nomeOnChange = function(e){
    return {
        type: 'ATUALIZAR_NOME',
        value: e.target.value
    }
}

export const emailOnChange = function(e){
    return {
        type: 'ATUALIZAR_EMAIL',
        value: e.target.value
    }
}

export const telOnChange = function(e){
    return {
        type: 'ATUALIZAR_TEL',
        value: e.target.value
    }
}

export const assuntoOnChange = function(e){
    return {
        type: 'ATUALIZAR_ASSUNTO',
        value: e.target.value
    }
}

export const limpar = function(e){
    return{
        type: 'LIMPAR'
    }
}