import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteUser, current } from '../Redux/Actions/AuthActions';
import { useLocation, useNavigate } from 'react-router-dom';

function DeleteProfil() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  // useEffect(()=>{
  //     dispatch(current())
  // },[])

  const user = useSelector(state=> state.AuthReducer.user)
  const oneUser = useSelector(state=> state.AuthReducer.oneUser)
  const navigate = useNavigate()

  const location = useLocation()

    // console.log(location)

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        Delete Profil
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are sure you want to delete your profile</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{dispatch(DeleteUser( location.pathname == '/Profil' ? user._id : oneUser._id,navigate,location));handleClose()}}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteProfil;