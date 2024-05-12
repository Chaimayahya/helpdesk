import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { current, getOneUser } from "../Redux/Actions/AuthActions";
import DeleteProfil from "./DeleteProfil";
import Card from 'react-bootstrap/Card';

const ProfilDescription = () => {
    const {id} = useParams()
    // console.log(id)
    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getOneUser(id))
    },[])
    const oneUser = useSelector(state=> state.AuthReducer.oneUser)

    
    return (
        <div>
            <Card border="danger" style={{ width: '26rem', textAlign:'center', marginTop:'70px', marginLeft:'524px' }}>
                <Card.Header>Profil</Card.Header>
                <Card.Body>
                <Card.Title>{oneUser.name}</Card.Title>
                <Card.Text>
                         {oneUser.email}
                </Card.Text>
                </Card.Body>


                <DeleteProfil/>
            </Card>
            <br />
            
            
            
        </div>
    );
};

export default ProfilDescription;