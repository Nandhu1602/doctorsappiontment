import React, { useState } from 'react';
import { Carousel,Card ,Button,Form,Image} from "react-bootstrap";
import './About.css';

import Footer from './Footer';
import Doctors from './Doctors'


export default function Appointment(){
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            alert("Details Submitted Successfully... \nPlease Wait For our call...\nYou will be connected with our Experts within 24 hours")
        }
    
        setValidated(true);
        
        event.preventDefault();
      };

   
    
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return(
        <div class="appointBody">
          <div class="carousels">  
          <h2 style={{textAlign:"center",background:"darkblue", marginLeft:'20%',marginRight:'20%',color:'cornsilk',borderRadius:'1rem',padding:"3px"}}>Types of Consultancies</h2>

            <Carousel activeIndex={index} onSelect={handleSelect}>
                
                <Carousel.Item>
                <div class="cards-wrapper">
                
                  <div class="inner-cards">
                  <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                    <Card style={{width:'14rem',height:"5rem"}}>
                        <Card.Img src="./generalphy.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >General physician</Card.Title>
                    </Card>
                    </Card.Link>
                    </div>

                
                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./psychologist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Psychologist</Card.Title>
                    </Card.Link>
                    </Card>
                    </div>


                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./dietician.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Dietician</Card.Title>
                    </Card.Link>
                    </Card>
                    </div>


                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./hairspl.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Skin and Hair Specialists</Card.Title>
                    </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./pathologist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Pathologist</Card.Title>
                    </Card.Link>
                    </Card>
                
                    </div>  
                </div>
                </Carousel.Item>


                <Carousel.Item>
                <div class="cards-wrapper">
                  <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./bonespl.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Bone and Joint Specialist</Card.Title>
                    </Card.Link>
                    </Card>
                    </div>

                    
                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./earnose.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Ear Nose and Throt Speacialist</Card.Title>
                        </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./sexology.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Sexologist</Card.Title>
                        </Card.Link>
                    </Card>
                    </div>


                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./diabetes.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Diabetes Specialist</Card.Title>
                        </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./dentist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Dentist</Card.Title>
                        </Card.Link>
                    </Card>
                    </div> 
                </div>
                </Carousel.Item>


                <Carousel.Item>
                <div class="cards-wrapper">
                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./psychaitrist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Psychiatrist</Card.Title>
                    </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./childspl.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Child Specialists</Card.Title>
                    
                    </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./urologist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Urologist</Card.Title>
                   </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./neurologist.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Neurologist</Card.Title>
                   </Card.Link>
                    </Card>
                    </div>

                    <div class="inner-cards">
                    <Card style={{width:'14rem',height:"5rem"}}>
                    <Card.Link style={{textDecoration:"none", color:"black"}} href="#book">
                        <Card.Img src="./ayurveda.webp"/>
                        <Card.Title style={{ textAlign:"center"}} >Ayurveda</Card.Title>
                   </Card.Link>
                    </Card>
                    </div>              
                </div>
                </Carousel.Item>
            </Carousel>
         </div>
        <div class="doctorsclass">
        <h2 style={{textAlign:"center",background:"darkblue", marginLeft:'20%',marginRight:'20%',color:'whitesmoke',borderRadius:'1rem',padding:"3px"}}>Here is Our Some specialised doctor available</h2>
            <div class='docbackground '>
             <Doctors/>
             </div>
        </div>

         <div class="mdbanner">
        <div style={{marginLeft:'3%'}}>
        <div class="contactingform" id='book'>

                <h2 style={{color:"white"}}>Let's Work Together</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="text" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Name</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                     This field is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="email" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Email address</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                     This field is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control required type="tel" pattern="[0-9]{10}" id="floatingInput" placeholder="Password" />
                    <Form.Label for="floatingInput">Contact Number</Form.Label>
                    <Form.Control.Feedback tooltip type="invalid">
                     This field is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="textarea" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Brief On Problems</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                     This field is required!
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="success" type="submit" style={{marginLeft:"30%",padding:".5rem 4rem"}}>Book Appointment</Button> 
                </Form>
                </div>

        </div>
        <div class="bannerImg">        
        <Image src="./hero_banner.webp" style={{width:"475px",height:'400px' }}></Image> 
        </div>
        
        </div>
            <Footer/>
        </div>
    );

}

