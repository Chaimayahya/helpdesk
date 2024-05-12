import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { DeleteCommentaire } from '../Redux/Actions/CommentaireActions';
import Button from 'react-bootstrap/esm/Button';
import { useNavigate } from "react-router-dom";
import Toast from 'react-bootstrap/Toast';

function Avis({el}) {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleDeleteCommentaire=(e)=>{
    e.preventDefault();
    dispatch(DeleteCommentaire(el._id, navigate,el.technicien._id))
  }
  return (
    
    <Toast className='Dark' style={{marginTop:'30px', marginLeft:'140px'}}>
      <Toast.Header>
        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
        <strong className="me-auto">{el.owner.name}</strong>
        <small>11 mins ago</small>
      </Toast.Header>
      <Toast.Body>    
        {
          el.commentaire
        }

      </Toast.Body>
      <div className='edit_delete'>
        <Link to={`/EditCommentaire/${el._id}`}><h7>Edit</h7></Link>
        <Button onClick={(e)=> handleDeleteCommentaire(e)}>Delete</Button>
      </div>

    </Toast>

    
  );
}

export default Avis;