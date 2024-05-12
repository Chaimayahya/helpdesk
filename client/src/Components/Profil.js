import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { current } from "../Redux/Actions/AuthActions"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import DeleteProfil from "./DeleteProfil";
import ListTicket from "./ListTicket";


;

const Profil=()=>{
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(current())
    },[])

    const user = useSelector(state=> state.AuthReducer.user)


    return(
        <div>
                <Card  style={{ width: '77%', transform: 'translateZ(1px)', opacity: '0.9', marginTop:'50px', marginLeft: '160px', textAlign:'center' }}>
                {/* , marginTop:'56px' */}
                    <Card.Body>
                        <Card.Title><span style={{fontWeight:'bold'}}>Name :</span> {user.name}</Card.Title>
                        <Card.Text>
                        <span style={{fontWeight:'bold'}}>Email</span> : {user.email}
                        </Card.Text>
                        <div style={{display:'flex', justifyContent:'space-evenly', flexDirection:'row', width: '445px', marginLeft:'361px'}}>
                            <Card.Link className='style_edit' as={Link} to='/EditUser'>Edit</Card.Link>
                            <DeleteProfil/>
                        </div>
                        <br/><br/><br/><br/>
                
             
                
                
                <ListTicket/>
                 
                </Card.Body>
                </Card>
            
                
        </div>
    )
}
export default Profil