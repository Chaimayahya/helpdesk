import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { current, logout } from '../Redux/Actions/AuthActions';
import { useEffect } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavUser=()=>{
    
    const dispatch = useDispatch()
    
    const token = localStorage.getItem('token')
    const user = useSelector(state=> state.AuthReducer.user)

    const navigate = useNavigate()
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container fluid>
            <Navbar.Brand href="#home">HELPDESK</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                
                {
                    token && user?
                    <>                    
                        <Nav.Link as={Link} to="/Profil">Profil</Nav.Link>
                        <Nav.Link as={Link} to="/AddTicket">Ticket</Nav.Link>

                        {
                            user.role == 'admin' &&
                            <>
                                <Nav.Link as={Link} to="/ListUser">List User</Nav.Link>
                                <Nav.Link as={Link} to="/ListTechnicien">List Technicien</Nav.Link>
                                <Nav.Link as={Link} to="/AddTechnicien">Add Technicien</Nav.Link>
                                <Nav.Link as={Link} to="/ListTicket">List Ticket</Nav.Link>
                                
                            </>
                        }
                        
                       
                        <Nav.Link onClick={()=>{dispatch(logout()); navigate('/')}}>Logout</Nav.Link>
                    </>
                    :
                    <>
                        <Nav.Link as={Link} to="/Register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/Login">Login</Nav.Link>
                    </>


                }
                
         

                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavUser