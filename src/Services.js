import React from "react";
import {Alert,Carousel,Image} from "react-bootstrap";
function Services(){
    return(
    <>
    <div class="serviceMain">
        <div>
            <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Incase Emergence Please! directly go to Emergence Menu and Book your Appointment as Soon as Possible...
                </p>
                <hr />
                <p className="mb-0">
                   <div class="listing">
                    <div>
                    <li>Best surgeons in country</li>
                    <li>High-tech equipments & specialised surgery clinics &nbsp;&nbsp;&nbsp;    </li><br/>
                    </div>
                    <div>
                        <li>All insurance accepted & No-cost EMI available</li>
                        <li>Surgeries for 50+ ailments</li>
                    </div>
                   </div>
                </p>
            </Alert>
        </div>
        <div class="mdbanner">
        <div style={{color:'white',marginLeft:'3%'}}>
        <h1 style={{marginTop:'2rem'}}>End to end care from Top Surgeons at our Practo Care Clinics</h1>
        <p style={{marginLeft:'5%'}}>Book appointments, Order health products, Consult with a doctor online,
                <br/>Book health chekups, store health records & read health tips.</p>
        </div>
        <div class="bannerImg">        
        <Image src="./hero_banner.webp" style={{width:"410px",height:'300px' }}></Image> 
        </div>
        </div>
        <div class="scroller">
        <h1>What our users have to say</h1>
        <Carousel fade>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./scroller1.png"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./scroller2.png"
                    alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="./scroller3.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
             </Carousel>

        </div>
    </div>
    </>
    );
}
export default Services;