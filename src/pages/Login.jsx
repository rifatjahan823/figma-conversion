 import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vector from "../../src/logo.png";
 

const Login = () => {

  return (
        <div className='min-vh-100 d-flex px-5 justify-content-center align-items-center' style={{background:"whitesmoke",overflow:'hidden'}}>        
         <div>
        {/* logo div  */}
          <div className='text-center'>
          <img className='img-fluid' src={vector} alt="logo" />
          </div>
         <h2 className='text-center py-2'>Log in to your account</h2>
         <p className='text-center text-secondary'>Welcome back! Please enter your details</p>
         {/* form section  */}
          
         <Form className='pb-3'>
            <Form.Group className='pb-2' controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="email" placeholder="Enter your email " />
            </Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Group className='pb-2' controlId="formBasicPassword">   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="Password" placeholder="Password"  />
            </Form.Group>
             <Form.Group className='py-3 d-flex justify-content-between' controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Remember me" />
             <a href="">Forgot Password</a>
             </Form.Group>
             <Button className='w-100 p-2' style={{background:'#0D6EFD',color:'#fff'}}type="submit">
              Sign In
              </Button>
              </Form>

              <Button variant="outline-primary" className='w-100 p-2 fw-bold'type="submit">
              <i class="fa-brands fa-google"></i> Sign in with Google
              </Button>
           
               <p className='text-center text-secondary pt-5'>Don't have an account?<Link to='/register'>Sign Up</Link></p>          
          </div>
         </div>
  )
}

export default Login