import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Collapse, Container,  Nav, Navbar, Tab, Tabs } from 'react-bootstrap';
import logo from "../../src/Vector.png";
import { BsEmojiSmile,BsEmojiAngry,BsEmojiHeartEyes,BsClipboard,BsBoxArrowUp,BsBookmark,BsHouseDoorFill,BsBarChartLine,BsFacebook,BsLinkedin,BsTwitter} from "react-icons/bs";
const Home = () => {
// ----------for Collapse----------
const [open,setOPen]=useState(false)
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
            <BsHouseDoorFill/><span className='px-2 text-white'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <BsBarChartLine/><span className='px-2 text-white'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fw-bold text-white'>
             <BsBarChartLine/><span className='px-2'>Usage</span> 
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
        <div style={{backgroundColor:'#F8F9FA',height:"770px"}} className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu position-relative pt-3'>
            <div className='ms-3'>
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsHouseDoorFill style={{fontSize:"16px"}}/><span className='px-2'>Instant</span>
             </Link>
             <br />
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsBarChartLine style={{fontSize:"16px"}}/><span className='px-2'>Schedule</span> 
             </Link>             
             <br />             
             <Link to='/' className='text-decoration-none fs-5 text-dark'>
             <BsBarChartLine style={{fontSize:"16px"}}/><span className='px-2'>Usage</span> 
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
        {/* ------tab-1 URL----------- */}
        <Tabs style={{padding:"0 5%"}} justify  variant="pills" defaultActiveKey="tab-1" >
            <Tab eventKey="tab-1" title='URL' >
            <div className='row'style={{marginTop:"40px"}}>
            <div className='col-md-4 col-12'>
            <input type="text" className="form-control" id="exampleFormControlInput1" />
            <button type="submit" className="btn btn-primary w-100 mt-2 mb-4">Generate Summary</button>
            </div>
            <div className='col-md-8 col-12'>
                <div className='card p-4'>
                    <div className='comment-area row align-items-top'>
                        <div className='comment-box col-7'>
                            <h3><i style={{color:'#0D6EFD'}} class="fa-solid fa-square"></i>  Virtual Commute</h3>
                        </div>
                        <div className='col-5 text-end'>
                        <BsClipboard/>
                        <BsBoxArrowUp style={{marginLeft:'10px'}}/>
                        <BsBookmark style={{marginLeft:'10px'}}/>
                        </div>
                     </div>
                     <div className='comment-date d-flex'>
                    <div className='mail'>
                         <p>microsoft.com</p>
                        </div>
                        <div style={{width:"1.5px",height:'14px',backgroundColor:"#6C757D",margin:'7px 5px',}}></div>
                        <div className='date'>
                      <p>April 14 2022</p>
                     </div>
                     </div>
                     <div className='comment-description'>
                        <div className='comment-top'>
                        <p>The Up-next card prompts you to "wrap up your day," you can select it to start your virtual commute now. If you've configured virtual commute reminders, the message appears 30 minutes before the time that you configured. For information about making this and other settings, see Insights app settings.</p>
                        <p> Within Protect time </p>
                        <p>In Protect time, when prompted with Ready to wrap up, select Start. This causes your virtual commute to start immediately. Set up virtual commutes The first time you open Protect time, you are prompted to schedule your virtual-commute reminders. Select the days and time of day you want to see the virtual commute reminders, and then select Set reminder. You can schedule reminders for any day of the week, including days not configured as workdays.</p>
                        </div>
                        <div className='border-bottom my-5'></div>
                       <div className='text-center mt-5'>
                       <div className='d-flex justify-content-center'>
                       <button type="button" className='btn btn-primary me-2 px-2 px-md-4'aria-controls='collapse' onClick={()=>setOPen(!open)}> <i class="fa-regular fa-square-plus"></i> Share Summary</button>
                       <button className='comment-bt-2 btn border border-2 border-primary text-primary px-2 px-md-4'><i class="fa-regular fa-square-plus"></i> View Original</button>
                       </div>
                        {/* ------collapse---------- */}
                         <Collapse in={open}>
                        <div style={{marginLeft:"20%",width:"50%"}} className='position-absolute mt-2 py-2' id="collapse">
                           <BsFacebook className='me-3 fs-4' style={{color:"#4267B2"}}/>
                            <BsLinkedin className='fs-4' style={{color:'#0072b1'}}/>
                            <BsTwitter className='ms-3 fs-4'style={{color:'#00acee '}}/>
                       </div>
                       </Collapse>
                        <div className=' w-100 mx-auto mt-5 pt-2'>
                        <h5 className=''>How was This Summery?</h5>
                        < BsEmojiSmile  style={{fontSize:'25px',color:"#FFDA6A"}}/>  
                        < BsEmojiSmile className='mx-2' style={{fontSize:'25px',color:"#FFDA6A"}}/> 
                        {/* ------for gradient color----- */}
                         <svg width="0" height="0">
                         <linearGradient id="blue-gradient" y1="50%" y2="50%" x1="0%" x2="100%">
                         <stop stopColor="#FFDA6A " offset="0%" />
                         <stop stopColor="#E9ECEF" offset="100%" />
                        </linearGradient>
                        </svg>
                          < BsEmojiSmile style={{fill: "url(#blue-gradient)",fontSize:'25px'}}/> 
                        < BsEmojiSmile className='mx-2'style={{fontSize:'25px',color:"#E9ECEF"}}/> 
                        < BsEmojiSmile style={{fontSize:'25px',color:"#E9ECEF"}}/> 
                       </div>
                       </div>
                    </div>
                </div>
            </div>
            </div> 
            </Tab>
         {/* ------tab-2 Text----------- */}
            <Tab eventKey="tab-2" title='Text'>
            <div className='row'style={{marginTop:"40px"}}>
            <div className='col-md-4 col-12'>
            <textarea type="text" placeholder='Enter a text or paragraph to generate summary' className="form-control" id="exampleFormControlInput1" style={{height:"525px"}}></textarea>
            <button type="submit" className="btn btn-primary w-100 mt-2 mb-4">Generate Summary</button>
            </div>
            <div className='col-md-8 col-12'>
                <div className='card p-4'>
                <div className='comment-area row align-items-top'>
                    <div className='comment-box col-7'>
                        <h3><i style={{color:'#0D6EFD'}} class="fa-solid fa-square"></i>  Virtual Commute</h3>
                    </div>
                    <div className='col-5 text-end'>
                    <BsClipboard/>
                    <BsBoxArrowUp style={{marginLeft:'10px'}}/>
                    <BsBookmark style={{marginLeft:'10px'}}/>
                    </div>
                </div>
                <div className='comment-date d-flex '>
                    <div className='mail'>
                         <p>microsoft.com</p>
                        </div>
                        <div style={{width:"1.5px",height:'14px',backgroundColor:"#6C757D",margin:'7px 5px',}}></div>
                        <div className='date'>
                      <p>April 14 2022</p>
                     </div>
                     </div>
                    <div className='comment-description '>
                        <div className='comment-top'>
                        <p>The Up-next card prompts you to "wrap up your day," you can select it to start your virtual commute now. If you've configured virtual commute reminders, the message appears 30 minutes before the time that you configured. For information about making this and other settings, see Insights app settings.</p>
                        <p> Within Protect time </p>
                        <p>In Protect time, when prompted with Ready to wrap up, select Start. This causes your virtual commute to start immediately. Set up virtual commutes The first time you open Protect time, you are prompted to schedule your virtual-commute reminders. Select the days and time of day you want to see the virtual commute reminders, and then select Set reminder. You can schedule reminders for any day of the week, including days not configured as workdays.</p>
                        </div>
                        <div className='border-bottom my-5'></div>
                        <div className='text-center mt-5'>
                        <div className='d-flex justify-content-center'>
                       <button type="button" className='btn btn-primary me-2 px-2 px-md-4'aria-controls='collapse' onClick={()=>setOPen(!open)}> <i class="fa-regular fa-square-plus"></i> Share Summary</button>
                       <button className='comment-bt-2 btn border border-2 border-primary text-primary px-2 px-md-4'><i class="fa-regular fa-square-plus"></i> View Original</button>
                       </div>
                        {/* ------collapse---------- */}
                        <Collapse in={open}>
                        <div  style={{marginLeft:"20%",width:"50%"}} className=' mt-2 py-2 position-absolute' id="collapse"> 
                        <BsFacebook className='me-3 fs-3' style={{color:"#4267B2"}}/>
                        <BsLinkedin className='fs-3' style={{color:'#0072b1'}}/>
                        <BsTwitter className='ms-3 fs-3'style={{color:'#00acee '}}/>
                       </div>
                       </Collapse>
                        <div className=' w-100  mx-auto mt-5 pt-2' >
                        <h5 >How was This Summery?</h5>
                        < BsEmojiSmile  style={{fontSize:'25px',color:"#FFDA6A"}}/>  
                        < BsEmojiSmile className='mx-2' style={{fontSize:'25px',color:"#FFDA6A"}}/> 
                        {/* ------for gradient color----- */}
                         <svg width="0" height="0">
                         <linearGradient id="red-gradient" y1="50%" y2="50%" x1="0%" x2="100%">
                         <stop stopColor="#FFDA6A " offset="0%" />
                         <stop stopColor="#E9ECEF" offset="100%" />
                        </linearGradient>
                        </svg>
                          < BsEmojiSmile style={{fill: "url(#red-gradient)",fontSize:'25px'}}/> 
                        < BsEmojiSmile className='mx-2'style={{fontSize:'25px',color:"#E9ECEF"}}/> 
                        < BsEmojiSmile style={{fontSize:'25px',color:"#E9ECEF"}}/> 
                       </div>
                       </div>
                    </div>
                </div>
            </div>
            </div>
            </Tab>
            {/* ------tab-3 Document----------- */}
            <Tab eventKey="tab-3" title='Document'>
                <div className='card p-4 w-75 mx-auto'style={{marginTop:"40px",backgroundColor:"#CFE2FF",color:"#154C9F"}} >
                    <h5>Coming Soon</h5>
                    <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                    <div className='my-4'style={{borderBottom:"1.5px solid  #B6D4FE"}}></div>
                    <p>Whenever you need to, be sure to use margin utilities to keep things nice and tidy.Username</p>
                </div>
            </Tab>
        </Tabs>
        </div>  
      </div>
      </div>
    </div>
     </div>
  
    );
};

export default Home;