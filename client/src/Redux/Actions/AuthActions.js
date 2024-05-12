import { CURRENT, FAIL, GETALLUSERS, GETONEUSER, LOGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { handleError } from "./ErrorActions"

export const register=(newUser,navigate) => async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignUp',newUser)

        dispatch({
            type: REGISTER,
            payload: res.data
        })

        navigate('/Profil')
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}

export const login=(cordUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/user/SignIn',cordUser)
        dispatch({
            type: LOGIN,
            payload: res.data
        })
        if (cordUser.email == process.env.emailAdmin) {
            navigate('/ProfilAdmin')
        } else {
            navigate('/Profil')
        }
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })

        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}


export const logout =()=>{
    return(
        {
            type: LOGOUT
        }
    )
}

export const current = ()=>async(dispatch)=>{
    const config = {
        headers : {
            Authoraziation : localStorage.getItem('token')
        }
    }
    try {
        const res= await axios.get('/api/user/ConnectedUser', config)

        dispatch(
            {
                type : CURRENT,
                payload : res.data
            }
        )
    } catch (error) {
        // dispatch({
        //     type : FAIL,
        //     payload : error.response.data.errors
        // })
        error.response.data.errors.forEach(element => {
            dispatch(handleError(element.msg))
        });
    }
}








export const getOneUser=(id)=>async(dispatch)=>{
    try {
       const res = await axios.get(`/api/user/getOneUser/${id}`)

       dispatch(
        {
            type : GETONEUSER,
            payload : res.data.user
        }
       )
    } catch (error) {
        console.log(error)
    }
}

export const editUser=(id,upUser,navigate)=>async(dispatch)=>{
    try {
        await axios.put(`/api/user/updateUser/${id}`,upUser)

        dispatch(current())

        navigate('/Profil')
    } catch (error) {
        console.log(error)
    }
}

export const DeleteUser=(id,navigate,location)=>async(dispatch)=>{
    try {

        if(location.pathname == '/Profil'){
            dispatch(logout())

            navigate('/')

            await axios.delete(`/api/user/deleteUser/${id}`)
        }else{
            await axios.delete(`/api/user/deleteUser/${id}`)

            dispatch(getAllUsers())
            
            navigate('/ListUser')
        }
        

       
    } catch (error) {
        console.log(error)
    }
}



export const getAllUsers=()=>async(dispatch)=>{
    try {
       const res =  await axios.get('/api/user/getAllUsers')

       dispatch(
        {
            type : GETALLUSERS,
            payload : res.data.users
        }
       )
    } catch (error) {
        console.log(error)
    }
}