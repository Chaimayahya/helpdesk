import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import { login } from '../Redux/Actions/AuthActions';
import {useNavigate} from 'react-router-dom'
const Login=()=>{

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin=(e)=>{
        e.preventDefault()
        dispatch(login({email,password},navigate))
    }
    return(
        <>
        <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login">
                        <div class="login__field">
                            <i class="login__icon fas fa-user"></i>
                            <input onChange={(e)=>setEmail(e.target.value)} type="text" class="login__input" placeholder="User name / Email"/>
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input onChange={(e)=>setPassword(e.target.value)} type="password" class="login__input" placeholder="Password"/>
                        </div>
                        <button onClick={(e)=>handleLogin(e)} class="button login__submit">
                            <span class="button__text">Log In Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>				
                    </form>
                    <div class="social-login">
                        <h3>log in via</h3>
                        <div class="social-icons">
                            <a href="#" class="social-login__icon fab fa-instagram"></a>
                            <a href="#" class="social-login__icon fab fa-facebook"></a>
                            <a href="#" class="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>		
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
        </>
        // <div className='register_form'>
        //     <Form style={{width:'450px', marginTop: '20px', marginBottom: '25px'}}>

        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Email address</Form.Label>
        //             <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
        //         </Form.Group>

        //         <Form.Group className="mb-3" controlId="formBasicEmail">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter password" />
        //         </Form.Group>

        //         <Button onClick={(e)=>handleLogin(e)} variant="primary" type="submit">
        //             Submit
        //         </Button>
        //         </Form>
        // </div>
    )
}
export default Login