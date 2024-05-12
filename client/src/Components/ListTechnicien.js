import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux" 



import { getAllTechniciens } from "../Redux/Actions/TechnicienActions";
import CardTechnicien from "./CardTechnicien";

const ListTechnicien = () => {

    const dispatch = useDispatch()
    
    useEffect(()=>{
        dispatch(getAllTechniciens())
    },[])

    const techniciens = useSelector(state=> state.TechnicienReducer.techniciens)

    

    return (
        <div className="carte_l">
            <h3 style={{marginTop:'20px', marginLeft:'672px', color:'#dc00ffd9', fontWeight:'bold'}}>List Technicien</h3>
            {
                techniciens.map((el,i,t)=> <CardTechnicien el={el}/>)
            }
        </div>
    );
};         

export default ListTechnicien;