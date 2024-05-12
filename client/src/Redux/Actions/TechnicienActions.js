
import axios from 'axios'
import { handleError } from "./ErrorActions";
import { ADDTECHNICIEN, GETALLTECHNICIENS, GETONETECHNICIEN } from '../ActionTypes/TechnicienTypes';
export const addTechnicien=(newTechnicien,navigate) => async(dispatch)=>{
    try {
        const res = await axios.post('/api/technicien/addTechnicien',newTechnicien)

        dispatch({
            type: ADDTECHNICIEN,
            payload: res.data
        })

        navigate('/ListTechnicien')
    } catch (error) {
        
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const getAllTechniciens=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/technicien/getAllTechnicien')

       dispatch(
        {
            type : GETALLTECHNICIENS,
            payload : res.data.techniciens
        }
       )
    } catch (error) {
        console.log(error)
    }
}



export const getOneTechnicien=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/technicien/getOneTechnicien/${id}`)

       dispatch(
        {
            type : GETONETECHNICIEN,
            payload : res.data.technicien
        }
       )
    } catch (error) {
        console.log(error)
    }
}


export const editTechnicien=(id,upTechnicien,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/technicien/updateTechnicien/${id}`,upTechnicien)

        dispatch(getAllTechniciens())

        navigate('/ListTechnicien')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteTechnicien=(id,navigate)=>async(dispatch)=>{
    try {


            await axios.delete(`/api/technicien/deleteTechnicien/${id}`)

            dispatch(getAllTechniciens())
            
            navigate('/ListTechniciens')
        
        
    } catch (error) {
        console.log(error)
    }
}