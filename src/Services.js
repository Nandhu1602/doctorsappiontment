import React from "react";
import {Alert,Carousel,Image,Form,Button} from "react-bootstrap";
function Services(){
    return(
    <>
    <div class="serviceMain">
        <div>
            <Alert variant="success">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <hr />
                <p className="mb-0">
                   <div class="listing">
                    <div style={{marginRight:"1rem"}}>
                    <li>Best surgeons in country</li>
                    <li>High-tech equipments & specialised <br/>surgery clinics  </li><br/>&nbsp;&nbsp;&nbsp;
                    </div>
                    <div>
                        <li>&nbsp;All insurance accepted & No-cost EMI available</li>
                        <li>&nbsp;Surgeries for 50+ ailments</li>
                    </div>
                   </div>
                </p>
            </Alert>
        </div>
        <div class="mdbanner">
        
        </div>
        <div class="scroller">
        <h1>What our users have to say</h1>
        <Carousel fade>
                <Carousel.Item interval={'1000'}>
                    <img
                    className="d-block w-100"
                    src="./scroller1.png"
                    alt="First slide"
                    
                    />
                </Carousel.Item>
                <Carousel.Item interval={' 1000'}>
                    <img
                    className="d-block w-100"
                    src="./scroller2.png"
                    alt="Second slide"
                    />

                   
                </Carousel.Item>
                <Carousel.Item interval={'1000'}>
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