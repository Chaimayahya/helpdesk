
import axios from 'axios'
import { handleError } from "./ErrorActions"
import { GETALLTICKETS, GETONETICKET } from '../ActionTypes/TicketTypes'

export const getAllTickets=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/ticket/getAllTicket')

       dispatch(
        {
            type : GETALLTICKETS,
            payload : res.data.tickets
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const getOneTicket=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/ticket/getOneTicket',{
        headers : {
            Authoraziation : localStorage.getItem('token')
        }
    })

       dispatch(
        {
            type : GETONETICKET,
            payload : res.data.tickets
        }
       )
    } catch (error) {
        console.log(error)
    }
}



       

export const addTicket=(newTicket) => async(dispatch)=>{
  
    try {
        const res = await axios.post('/api/ticket/addTicket',newTicket,{
            headers : {
                Authoraziation : localStorage.getItem('token')
            }
        })

        dispatch(getAllTickets())

      
    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const editTicket=(id,upTicket,location)=>async(dispatch)=>{
    try {
       
        await axios.put(`/api/ticket/updateTicket/${id}`,upTicket)

        if (location.pathname == '/Profil') {
            dispatch(getOneTicket())
        } else {
            dispatch(getAllTickets())
               }
        

    
    } catch (error) {
        console.log(error)
    }
}


export const DeleteTicket=(id,location)=>async(dispatch)=>{
    try {


            await axios.delete(`/api/ticket/deleteticket/${id}`)
            if (location.pathname == '/Profil') {
                dispatch(getOneTicket())
            } else {
                dispatch(getAllTickets())
                   }
           
        
    } catch (error) {
        console.log(error)
    }
}