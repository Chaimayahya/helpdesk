import { ADDTICKET, GETALLTICKETS, GETONETICKET } from "../ActionTypes/TicketTypes"


const initialState = {
    ticket : [],
    tickets : [],
    oneTicket : []
}

const TicketReducer=(state = initialState, action)=>{
    switch (action.type) {

        case GETALLTICKETS : return {...state,commandes : action.payload}
        case GETONETICKET : return {...state,ownCommandes : action.payload}
        case ADDTICKET : return {...state,ownPanier : action.payload}
        default: return state
    }
}

export default TicketReducer