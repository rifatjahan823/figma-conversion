import React from 'react';
import { Form,Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import vector from "../../src/logo.png";
 

const Register = () => {

  return (
        <div className='min-vh-100 d-flex px-5 justify-content-center align-items-center' style={{background:"whitesmoke",overflow:'hidden'}}>        
         <div>
        {/* logo div  */}
          <div className='text-center'>
          <img className='img-fluid pt-3' src={vector} alt="logo" />
          </div>
         <h2 className='text-center py-2'>Create an account</h2>
         <p className='text-center text-secondary'>Start your journey!</p>
         {/* form section  */}
          
         <Form className='pb-3'>
            <Form.Group className='pb-2' controlId="formBasicName">
            <Form.Label>Name</Form.Label>   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="text" placeholder="Enter your name " required/>
            </Form.Group>
            <Form.Group className='pb-2' controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="email" placeholder="Enter your email " required/>
            </Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Group className='pb-2' controlId="formBasicPassword">   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="Password" placeholder="Password" required />
            </Form.Group>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Group className='pb-2' controlId="formBasicPassword">   
            <Form.Control style={{padding:'0.8rem',width:'325px'}} type="Password" placeholder="Confirm Password" required />
            </Form.Group>
              
             <Button className='w-100 mt-2 p-2' style={{background:'#0D6EFD',color:'#fff'}}type="submit">
              Get Started
              </Button>
              </Form>

              <Button variant="outline-primary" className='w-100 p-2 fw-bold'type="submit">
              <i class="fa-brands fa-google"></i> Sign up with Google
              </Button>
           
              <p className='text-center text-secondary pt-5'>Already have an account? <Link to='/login'>Sign in</Link></p>          
          </div>
         </div>
  )
}

export default Register