import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 


import Table from 'react-bootstrap/Table';
import { getAllTickets } from "../Redux/Actions/TicketActions";
import CardTicket from "./CardTicket";
const ListTicket = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllTickets())
    },[])

    const tickets = useSelector(state=> state.TicketReducer.tickets)
    return (
        <div>
             <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Ref</th>
                  <th>Client</th>
                  <th>Tickets</th>
                  
                  
                  <th>Status</th>
                  <th>Validate</th>
                </tr>

              
              </thead>
              <tbody>
              {
                tickets &&        tickets.map((el,i,t)=> <CardTicket el={el}/>)
                    }
              </tbody>
            </Table>
            
        </div>
    );
};

export default ListTicket;