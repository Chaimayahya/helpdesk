import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';

import {Link, useLocation} from 'react-router-dom'
import { DeleteTicket, editTicket } from '../Redux/Actions/TicketActions';
const CardTicket = ({el}) => {
  const user = useSelector(state=> state.AuthReducer.user)
  const dispatch = useDispatch()
  const location = useLocation()
    return(
        <tr>
        <td>{el?.owner?.name}</td>
        <td>{el?.technicien?.refT}</td>
        
        <td>{el?.tickets?.map((el,i,t)=><><Link style={{textDecoration:'none'}} to={`/TecDesc/${el.ticket._id}`}><h6 >{el.ticket.description}</h6></Link></>)}</td>
    
        <td>{el.status}</td>
        <td style={{display:'flex', justifyContent:'space-evenly',height:'80px'}}>

{
  user.role == 'admin' &&
  <>
    <Button style={{height:'40px'}} onClick={()=>dispatch(editTicket(el._id,{status : 'Accepter'},location))} variant="success">Accepter</Button>
    <Button style={{height:'40px'}}  onClick={()=>dispatch(editTicket(el._id,{status : 'Refuser'},location))} variant="outline-danger">Refuser</Button>
  </>
}
{
  el.status !== 'Accepter' &&
  <>
  <Button style={{height:'40px'}}  onClick={()=>dispatch(DeleteTicket(el._id,location))} variant="danger">Delete</Button> 
 
  </>
}
        
        </td>

      </tr>
    )
};

export default CardTicket;