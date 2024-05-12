import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { editCommentaire, getOneCommentaire } from "../Redux/Actions/CommentaireActions";

const EditCommentaire = () => {
    const {id} = useParams()

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getOneCommentaire(id))
    },[])

    const oneCommentaire = useSelector(state=> state.CommentaireReducer.commentaire)


    const [commentaire, setCommentaire] = useState(oneCommentaire.commentaire)

    
    useEffect(()=>{
        setCommentaire(oneCommentaire.commentaire)

      },[oneCommentaire])


    const navigate = useNavigate()

    const handleEditCommentaire=(e)=>{
        e.preventDefault()
        dispatch(editCommentaire(id,{commentaire}, navigate,oneCommentaire.product))
    }
    return (
        <div className='register_form'>
            <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Commentaire</Form.Label>
                    <Form.Control value={commentaire} onChange={(e)=>setCommentaire(e.target.value)} type="text" placeholder="Enter Commentaire" />
                </Form.Group>
                
                <Button onClick={(e)=> handleEditCommentaire(e)} variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default EditCommentaire;