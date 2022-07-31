
import React, { useState } from "react";
import {Alert,Button,Image,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import Services from './Services'
import Footer from "./Footer";


function About() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false  );
    const [smShow, setSmShow] = useState(false);
    const [lgShow, setLgShow] = useState(false);

    const handleClose = () => setLgShow(false);
    
  const handlecancel=()=>{
        setLgShow(false);
      alert("Your appointment is cancelled successfull...")
    
}

  
   
    return(
        <>
       
        <div >
        
            <div  class="aboutheader">
            <Image src='/doctor.png' style={{width:"400px",height:"400px" }} roundedCircle ></Image>
        <div class="textaligning1" >
    <div class="textaligning2">
        <h1>About Us</h1>
        <h3>Vision </h3>
        <p>Create a Healthier India for Everyone</p>

        <h3>Mission </h3>
        <p>Relevant, Trusted and Accessible Health Care</p>


        <h3>Values </h3>
        <p>Quality, Compassion & Care</p>
    </div>
        <div class="booking">
         {
                values.map((v, idx) => (
                    <Button variant="success" key={idx} className="me-7 mb-2 " onClick={() => setLgShow(true)}>
                    Cancel Appointments 
                    </Button>
                 ))}
      
      <Modal  size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg" >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">Cancel Appointments</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Services/>
                    <div>
                    <h2>Do you really want to be Cancel the Appointment</h2>
                    <Button className="col-2" onClick={handlecancel} style={{margin:"1%"}}>Yes, Confirm</Button>
                    <Button className="col-2" onClick={handleClose}>Close</Button>
                    </div>
        </Modal.Body>
      </Modal>
      </div>
        </div>
        <Image src='/doctor.jpg' style={{width:"550px",height:"400px" ,marginLeft:"8%"}}  rounded></Image>
        </div>
        <div class="services">
            <div class="serviceTypes">
            <div class="parastyle">
                <h1>  Doctors’ Advisory Panel</h1>
            <p> Meet our board-certified expert Doctors
                Connect with our doctors directly using phone, tablet or computer
                Just like a clinic visit, our doctors listen to your history of symptoms and diagnose your condition. 
                Depending on it, they may prescribe medicines or recommend some lab tests.
            </p>
            </div>
           
        </div>
        </div>
        
        </div>
        <Footer/>
        </>
    );
  }    

export default About;