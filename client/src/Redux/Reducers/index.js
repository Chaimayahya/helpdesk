import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorReducer from './ErrorReducer'
import TechnicienReducer from './TechnicienReducer'

import CommentaireReducer from './CommentaireReducer'
import TicketReducer from './TicketReducer'
const rootReducer=  combineReducers({AuthReducer, ErrorReducer, CommentaireReducer, TechnicienReducer,TicketReducer})

export default rootReducer