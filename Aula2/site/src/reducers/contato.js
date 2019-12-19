const INITIAL_STATE = {
    data : '',
    nome : '',
    email : '',
    telefone : '',
    assunto : ''
}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ATUALIZAR_DATA' : return {...state, data : action.value}
        case 'ATUALIZAR_NOME' : return {...state, nome : action.value}
        case 'ATUALIZAR_TEL' : return {...state, telefone : action.value}
        case 'ATUALIZAR_EMAIL' : return {...state, email : action.value}
        case 'ATUALIZAR_ASSUNTO' : return {...state, assunto : action.value}
        case 'LIMPAR' : return {...state, INITIAL_STATE}
    default : return state
    }
}