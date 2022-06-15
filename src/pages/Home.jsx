import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../src/Vector.png";
const Home = () => {
     
    return (
      <div className=''>
        <div className=''>
            <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky="top" className='text-white p-0'>
          <Container fluid> 
            <Navbar.Brand >
             <h4 className='text-white'><img className='pb-1' src={logo} alt="logo" /> Summary</h4>
         </Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
             <Nav className="ms-3 mt-3">
                  <p className=''>Search</p>
                  <div className='d-lg-none d-block'>
            <Link to='/' className='text-decoration-none text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
            </svg><span className='px-2 text-white'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
             <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
             </svg><span className='px-2 text-white'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
             <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
             </svg><span className='px-2'>Usage</span> 
             </Link>        
             </div>
             </Nav>
             <Nav className="ms-auto mt-3">
                <p className='px-3'>Sign Out</p>
             </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
         </div>
        </div>
 {/* --------------------for desktop-------------   */}
    <div className='container-fluid'>  
      <div className='row'>
        <div style={{backgroundColor:'#F8F9FA'}} className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu position-relative pt-3'>
            <div className='ms-3'>
             <Link to='/' className='text-decoration-none fs-5'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
            <path className='text-dark' d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
            </svg><span className='px-2'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
             <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
             </svg><span className='px-2'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bar-chart-line" viewBox="0 0 16 16">
             <path d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z"/>
             </svg><span className='px-2'>Usage</span> 
             </Link>           
            </div>
            <div className='user position-absolute bottom-0 border-top w-100' >
                <div className='d-flex align-items-center my-1'>
                <i style={{color:'white',backgroundColor:"#CFD4D9",padding:"10px",borderRadius:"50px",fontSize:"15px"}} class="fa-solid fa-user-large"></i>
                 
                <h6 className='mt-2 px-2'>User Name</h6>

                <i style={{color:'#6C757D'}} class="fa-solid fa-caret-down"></i>
                </div>
            </div>
            </div>
        </div>

      <div className='col-12 col-md-10  py-4 side-content'>
      <div className='row align-items-center  '>
            <div className=' col-4 text-end'>
                <button className='btn btn-primary w-75'>URL</button>
            </div>   
            <div className='col-4 text-center '>
                <h2 style={{color:'#0D6EFD',fontSize:'16px'}}>Text</h2>      
            </div>   
            <div className='col-4 d-flex align-items-center text-center'>
                <h2 style={{color:'black',fontSize:'16px'}}>Document</h2>
                <div className='d-lg-none d-block ms-5 '>
            </div>
        </div>
        </div>  
        <div className='row'style={{marginTop:"40px"}}>
            <div className='col-md-4 col-12'>
            <input type="text" className="form-control" id="exampleFormControlInput1" />
            <button type="submit" className="btn btn-primary w-100 mt-2 mb-4">Generate Summary</button>
            </div>
            <div className='col-md-8 col-12'>
                <div className='card p-4'>
                    <div className='comment-area row align-items-top'>
                        <div className='comment-box col-8'>
                            <h3><i style={{color:'#0D6EFD'}} class="fa-solid fa-square"></i>  Virtual Commute</h3>
                            <div className='comment-date d-flex'>
                                <div className='mail'>
                                    <p>microsoft.com</p>
                                </div>
                                <div style={{width:"1.5px",height:'14px',backgroundColor:"#6C757D",margin:'7px 5px',}}></div>
                                <div className='date'>
                                    <p>April 14 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>
                        <svg style={{marginLeft:'10px'}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z"/>
                        <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z"/>
                        </svg>
                        <svg style={{marginLeft:'10px'}}  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        </svg>
                        </div>
                    </div>
                    <div className='comment-description'>
                        <div className='comment-top'>
                        <p>The Up-next card prompts you to "wrap up your day," you can select it to start your virtual commute now. If you've configured virtual commute reminders, the message appears 30 minutes before the time that you configured. For information about making this and other settings, see Insights app settings.</p>
                        <p> Within Protect time </p>
                        <p>In Protect time, when prompted with Ready to wrap up, select Start. This causes your virtual commute to start immediately. Set up virtual commutes The first time you open Protect time, you are prompted to schedule your virtual-commute reminders. Select the days and time of day you want to see the virtual commute reminders, and then select Set reminder. You can schedule reminders for any day of the week, including days not configured as workdays.</p>
                        </div>
                       <div className='text-center mt-5'>
                       <button className='comment-bt-1 btn btn-primary me-2 mt-4'> <i class="fa-regular fa-square-plus"></i> Share Summary</button>
                        <button className='comment-bt-2 btn border border-2 border-primary text-primary mt-4'><i class="fa-regular fa-square-plus"></i> View Original</button>

                        <p className='mt-3'>How was This Summery?</p>
                        <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                       </svg>  
                        <svg style={{marginLeft:'15px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-heart-eyes" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="M11.315 10.014a.5.5 0 0 1 .548.736A4.498 4.498 0 0 1 7.965 13a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .548-.736h.005l.017.005.067.015.252.055c.215.046.515.108.857.169.693.124 1.522.242 2.152.242.63 0 1.46-.118 2.152-.242a26.58 26.58 0 0 0 1.109-.224l.067-.015.017-.004.005-.002zM4.756 4.566c.763-1.424 4.02-.12.952 3.434-4.496-1.596-2.35-4.298-.952-3.434zm6.488 0c1.398-.864 3.544 1.838-.952 3.434-3.067-3.554.19-4.858.952-3.434z"/>
                       </svg>
                       </div>
                    </div>
                </div>
            </div>
        </div> 
      </div>
      </div>
    </div>
     </div>
  
    );
};

export default Home;