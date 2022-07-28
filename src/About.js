
import React, { useState } from "react";
import {Card,Button,Image,Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './About.css';
import Services from './Services'



function About() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
  

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
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
                    <Button variant="success" key={idx} className="me-7 mb-2 " onClick={() => handleShow(v)}>
                    Services  
                    </Button>
                 ))}
      
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Services</Modal.Title>
        </Modal.Header>
        <Modal.Body>
                    <Services/>
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
            <div class="spacing">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title style={{marginLeft:'22%'}}>Dermatology</Card.Title>
                    <Image src="/smlogo1.jpg" roundedCircle width={'100px'} style={{marginLeft:'30%'}}></Image>
                    <Card.Subtitle className="mb-2 text-muted">Specialists for skin and hair treatments</Card.Subtitle>
                    <Card.Text>
                    Rashes, Pimples, Acne, Hairfall, Dandruff <br/>                   
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            </div>
            <div class="spacing">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title style={{marginLeft:'10%',width:'100%'}}>Consultant Physician</Card.Title>
                    <Image src="/smlogo2.webp" roundedCircle width={'100px'} style={{marginLeft:'30%'}}></Image>
                    <Card.Subtitle className="mb-2 text-muted m-1.5">General Checkups Consultant</Card.Subtitle>
                    <Card.Text>
                    Rashes, Pimples, Acne, Hairfall, Dandruff                   
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div class="spacing">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title style={{marginLeft:'26%'}}>Gynecology</Card.Title>
                    <Image src="/smlogo3.webp" roundedCircle width={'100px'} style={{marginLeft:'30%'}}></Image>
                    <Card.Subtitle className="mb-2 text-muted">Specialists for skin and hair treatments</Card.Subtitle>
                    <Card.Text>
                    Rashes, Pimples, Acne, Hairfall, Dandruff                    
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div class="spacing">
            <Card style={{ width: '15rem' }}>
                <Card.Body>
                    <Card.Title style={{marginLeft:'25%'}}>Phychiatry</Card.Title>
                    <Image src="/smlogo4.jpeg" roundedCircle width={'100px'} style={{marginLeft:'30%'}}></Image>
                    <Card.Subtitle className="mb-2 text-muted">Specialists for Meantal  treatments</Card.Subtitle>
                    <Card.Text>
                    Rashes, Pimples, Acne, Hairfall, Dandruff                    
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
        </div>
        
        </div>
        </>
    );
  }    

export default About;