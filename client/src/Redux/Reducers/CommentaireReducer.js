import { GETALLCOMMENTAIRES, GETONECOMMENTAIRE } from "../ActionTypes/CommentaireTypes"

const initialState = {
    commentaires : [],
    commentaire : {}
}

const CommentaireReducer=(state = initialState, action)=>{
    switch (action.type) {

        case GETALLCOMMENTAIRES : return {...state,commentaires : action.payload}
        case GETONECOMMENTAIRE : return {...state,commentaire : action.payload}

        default: return state
    }
}

export default CommentaireReducer