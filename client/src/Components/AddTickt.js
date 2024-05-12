import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addTicket } from "../Redux/Actions/TicketActions";


const AddTicket = () => {
    const [description, setdescription] = useState('')
    
    


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleAddTicket=(e)=>{
        e.preventDefault()
        dispatch(addTicket({description}, navigate))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Ticket</Form.Label>
                    <Form.Control onChange={(e)=>setdescription(e.target.value)} type="text" placeholder="Enter ticket" />
                </Form.Group>

                

                

                

                

        <br/>
                <Button style={{width:'80px', marginLeft:'160px'}} onClick={(e)=> handleAddTicket(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddTicket