import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../Redux/Actions/AuthActions";
import CardUser from "./CardUser";

const ListUser = () => {
    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])

    const users = useSelector(state=> state.AuthReducer.users)

    return (
        <div>
            <h3 style={{marginTop:'20px', marginLeft:'672px', color:'#dc00ffd9', fontWeight:'bold'}}>List User</h3>
            {
                users.map((el,i,t)=> <CardUser el={el}/>)
            }
        </div>
    );
};

export default ListUser;