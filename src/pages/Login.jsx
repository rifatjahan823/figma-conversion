 import React from 'react';
import { Form,Button, Container} from 'react-bootstrap';
import vector from "../../src/Vector.png";

const Login = () => {

  return (
        <div className='min-vh-100 d-flex px-5 justify-content-center align-items-center' style={{background:"whitesmoke"}}>        
         <div className='mt-5 pt-5'>
        {/* logo div  */}
          <div className='text-center' style={{background:' #0D6EFD',padding:'23px 30px',width:'85px',height:'70px',borderRadius: '37.5px 0px',marginLeft:'9rem'}}>
          <img className='img-fluid' src={vector} alt="logo" />
          </div>
         <h1 className='text-center py-2'>Please sign in</h1>
         {/* form section  */}
         <Container>
         <Form className='pb-5'>
            <Form.Group controlId="formBasicEmail">   
            <Form.Control style={{padding:'0.8rem',width:'366px'}} type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">   
            <Form.Control style={{padding:'0.8rem',width:'366px'}} type="Password" placeholder="Password" />
            </Form.Group>
             <Form.Group className='py-3' controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Remember me" />
             </Form.Group>
             <Button className='w-100 p-2' style={{background:'#0D6EFD',color:'#fff'}}type="submit">
              Sign Up
              </Button>
              </Form>
         </Container>
           
              <p className='text-center pt-5 mt-5'>&copy;2017-2021 Company Name</p>          
          </div>
         </div>
  )
}

export default Login