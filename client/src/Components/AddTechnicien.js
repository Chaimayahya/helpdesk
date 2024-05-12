import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTechnicien } from "../Redux/Actions/TechnicienActions";

const AddTechnicien = () => {
    const [refT, setrefT] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddTec=(e)=>{
        e.preventDefault()
        dispatch(addTechnicien({refT,name,email,password}, navigate))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ID Technicien</Form.Label>
                    <Form.Control onChange={(e)=>setrefT(e.target.value)} type="text" placeholder="Enter ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e)=>setname(e.target.value)} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control onChange={(e)=>setemail(e.target.value)} type="text" placeholder="Enter Email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setpassword(e.target.value)} type="number" placeholder="Enter password" />
                </Form.Group>

                

        <br/>
                <Button style={{width:'80px', marginLeft:'160px'}} onClick={(e)=> handleAddTec(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddTechnicien;