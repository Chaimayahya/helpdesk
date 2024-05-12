import { CURRENT, FAIL, GETALLUSERS, GETONEUSER, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState = {
    user : {},
    users : [],
    errors : [],
    oneUser : {}
}

const AuthReducer=(state = initialState, action)=>{
    switch (action.type) {

        case REGISTER : 
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.newUser, errors : null}

        case FAIL : return {...state, errors : action.payload, user: null}

        case LOGIN : 
        localStorage.setItem('token', action.payload.token)
        return {...state, user : action.payload.found, errors: null}

        case LOGOUT : 
        localStorage.removeItem('token')
        return {...state, user: null, token: null}

        case CURRENT: return {...state, user : action.payload}

        case GETONEUSER : return {...state, oneUser : action.payload}
        case GETALLUSERS : return {...state, users : action.payload}
        default: return state
    }
}

export default AuthReducer