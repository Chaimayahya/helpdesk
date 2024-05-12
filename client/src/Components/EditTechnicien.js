import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editTechnicien, getOneTechnicien } from "../Redux/Actions/TechnicienActions";

const EditTechnicien = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneTechnicien(id))
    },[])

    const technicien = useSelector(state=> state.TechnicienReducer.oneTechnicien)


    const [refT, setrefT] = useState(technicien.refT)
    const [name, setname] = useState(technicien.name)
    const [email, setemail] = useState(technicien.email)
    const [password, setpassword] = useState(technicien.password)
    
    useEffect(()=>{
        setrefT(technicien.refT)
        setname(technicien.name)
        setemail(technicien.email)
        setpassword(technicien.password)
       
      },[technicien])


    const navigate = useNavigate()

    const handleEditTec=(e)=>{
        e.preventDefault()
        dispatch(editTechnicien(id,{refT,name,email,password}, navigate))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>reference</Form.Label>
                    <Form.Control value={refT} onChange={(e)=>setRefT(e.target.value)} type="text" placeholder="Enter ref" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name </Form.Label>
                    <Form.Control value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter NameProduct" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>email</Form.Label>
                    <Form.Control value={email} onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Enter description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>password</Form.Label>
                    <Form.Control value={password} onChange={(e)=>setpassword(e.target.value)} type="number" placeholder="Enter prix" />
                </Form.Group>

                
                
                <Button onClick={(e)=> handleEditTec(e)} variant="primary" type="submit">
                    Submit
                </Button>

               
            </Form>
        </div>
    );
};

export default EditTechnicien;