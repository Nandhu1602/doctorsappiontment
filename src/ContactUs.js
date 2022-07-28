import React from "react";
import {Card,Form,Button,Image} from "react-bootstrap"
import './About.css'


function Contact(){
    return(
        <div class="maindiv">
    <div class="headerimg">
        <Image src="/contactbanner.jpg" width={'100%'} height={'300px'}></Image>
        </div>
        <div class="address">
            <div class="locAddress">
            <div class="padspace">  
            <Card style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title>Calicut - INDIA</Card.Title>
                    <Card.Text>
                        Mindster<br/>
                        SBC Unit 4, 1st Floor
                        Sahya, Govt. CyberPark
                        GA College P.O, Calicut
                        Kerala - 673014, India
                    </Card.Text>
                    <Card.Link href="tel:+91 9526015617">Call:+91 9526015617</Card.Link>
                </Card.Body>
            </Card>
            </div>
            <div class="padspace">
            <Card style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title>Bangalore - INDIA</Card.Title>
                    <Card.Text>
                    Aufait Technologies Pvt.
                    Ltd 1st Floor, 
                    Umiya Emporium 102,
                    Kaveri Layout Koramangala, 
                    Bangalore Karnataka - 560029,
                    India
                    </Card.Text>
                    <Card.Link href="tel:+91 9567555110">Call:+91 9567555110</Card.Link>
                </Card.Body>
            </Card>
            </div>
            </div>
            <div class="locAddressRight">
            <div class="padspace">  
            <Card style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title> Dubai - UAE</Card.Title>
                    <Card.Text>
                            <br/>
                            #301, Al Safa Tower
                            Near Emirates Tower
                            Metro Station
                            Sheikh Zayed Road
                            Dubai, UAE

                    </Card.Text>
                    <Card.Link href="tel:+971 55 5039693">Call:+971 55 5039693</Card.Link>
                </Card.Body>
            </Card>
            </div>
            <div class="padspace">  
            <Card style={{ width: '18rem' }}>
                <Card.Body >
                    <Card.Title>Texas - USA</Card.Title>
                    <Card.Text>
                        <br/>
                        <br/>
                            1321 Upland Dr.
                            Suite 7206
                            Houston
                            TX 77043
                            United States
                            <br/>  
                            <br/>  
                    </Card.Text>
                    <Card.Link href="tel: +1 (551) 295 8311">Call: +1 (551) 295 8311</Card.Link>
                </Card.Body>
            </Card>
            </div>
            </div>
            <div class="contactingform">

                <h2>Let's Work Together</h2>
                <Form>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="text" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Name</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="email" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Email address</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control type="tel" pattern="[0-9]{10}" id="floatingInput" placeholder="Password" />
                    <Form.Label for="floatingInput">Contact Number</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="textarea" id="floatingInput" placeholder="Enter email" />
                    <Form.Label for="floatingInput">Brief On Problems</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Button variant="success" type="submit" style={{marginLeft:"30%",padding:".5rem 4rem"}}> Request Call</Button> 
                </Form>
            </div>
        </div>
        </div>
    );
}

export default Contact;