import { GETALLCOMMENTAIRES, GETONECOMMENTAIRE } from "../ActionTypes/CommentaireTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"
export const getAllCommentaire=(id)=>async(dispatch)=>{
    try {
       const res =  await axios.get(`/api/commentaire/getAllCommentaire/${id}`)

       dispatch(
        {
            type : GETALLCOMMENTAIRES,
            payload : res.data.commentaires
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const addCommentaire=(newCommentaire) => async(dispatch)=>{
  
    try {
        
        const res = await axios.post('/api/commentaire/addCommentaire',newCommentaire,{
            headers : {
                Authoraziation : localStorage.getItem('token')
            }
        })

        dispatch(getAllCommentaire(newCommentaire.product))

    } catch (error) {
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const getOneCommentaire=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/commentaire/getOneCommentaire/${id}`)

       dispatch(
        {
            type : GETONECOMMENTAIRE,
            payload : res.data.commentaire
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const editCommentaire=(id,upCommentaire,navigate,prod)=>async(dispatch)=>{
    try {
        await axios.put(`/api/commentaire/updateCommentaire/${id}`,upCommentaire)

        dispatch(getAllCommentaire(prod))

        navigate(`/ProdDesc/${prod}`)
    } catch (error) {
        console.log(error)
    }
}

export const DeleteCommentaire=(id,navigate,prod)=>async(dispatch)=>{
    try {


            await axios.delete(`/api/commentaire/deleteCommentaire/${id}`)

            dispatch(getAllCommentaire(prod))

            // navigate(`/ProdDesc/${prod}`)

        
    } catch (error) {
        console.log(error)
    }
}