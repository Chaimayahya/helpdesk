import { ADDTECHNICIEN, GETALLTECHNICIENS, GETONETECHNICIEN } from "../ActionTypes/TechnicienTypes"

const initialState = {
    technicien : {},
    techniciens : [],
    oneTechnicien:{}
}

const TechnicienReducer=(state = initialState, action)=>{
    switch (action.type) {
        case ADDTECHNICIEN : return {...state, technicien : action.payload.newTechnicien, errors : null}
        case GETALLTECHNICIENS : return {...state, techniciens : action.payload}
        case GETONETECHNICIEN : return {...state, oneTechnicien : action.payload}
        default: return state
    }
}

export default TechnicienReducer