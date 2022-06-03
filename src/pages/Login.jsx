 
import React from 'react';
import { Form,Button,Container} from 'react-bootstrap';
import vector from "../../src/Vector.png";
const Login = () => {
  return (
        <Container style={{background:"whitesmoke",minHeight:'100vh'}}>
         
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
         <div style={{margin:'10vh'}}>
        {/* logo div  */}
          <div style={{textAlign:'center',background:' #0D6EFD'
           ,padding: '25px',width:'80px',height:'60px',borderRadius: '37.5px 0px',marginLeft:'8rem'}}>
          <img style={{paddingTop:'6px'}} src={vector} alt="" />
          </div>

         <h1 style={{textAlign:'center'}}>Please sign in</h1>

         {/* form section  */}
            <Form>
            <Form.Group controlId="formBasicEmail">   
            <Form.Control style={{padding:'0.8rem',width:'366px'}} type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">   
            <Form.Control style={{padding:'0.8rem',width:'366px'}} type="Password" placeholder="Password" />
            </Form.Group>
             <Form.Group style={{padding:'1.2rem 0'}} controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="Remember me" />
             </Form.Group>
             <Button style={{padding:'0.8rem',width:'396px',background:'#0D6EFD',color:'#fff',border:'none'}} type="submit">
              Sign Up
              </Button>
              </Form>          
          </div>
         </div>
         <p style={{textAlign:'center',paddingTop:'4rem'}}>&copy;2017-2021 Company Name</p>
         </Container>
  )
}

export default Login