import React from "react";
import {Button, Card,Image} from 'react-bootstrap';
import './Doctor.css';

export default function Doctors(){
   
    return(
        <>
        <div class="doctorsBody">
            <div class="doctorsgrp">
                <div class="doubledoc">
                    <div class="singledoc">
                    <Card style={{width:"40rem"}}>
                        <div class="aligningdoc"> 
                        <Image src="Khushboo.jpg" roundedCircle style={{width:"8rem",height:"10rem",margin:'1rem'}}></Image>
                        <div class="expertise">
                        <div>
                        </div><br/><br/>
                        <h5>Area of expertise</h5>
                        Addiction, Anger, Anxiety, Bipolar Disorder, 
                        Child and Adolescent, Depression, OCD, Phobia, 
                        Relationship, Sleep, <br/>Stress<br/><br/><br/><br/>
                            
                        </div>                        
                        </div>
                        <Button className="col-6 m-1" variant="outline-warning" size="lg" onClick={() => alert("Booking Successfully...\n you get Details of appointment once your slot booked and \n details mailed to you")}>DR. KHUSHBOO DEWANI</Button>
                        <Card.Subtitle className="px-3">Psychiatrist</Card.Subtitle>
                        <small className="px-3"> 3 years</small>
                    </Card>
                    </div>
                    <div class="singledoc">
                    <Card style={{width:"40rem"}}>
                        <div class="aligningdoc"> 
                        <Image src="doc1.png" roundedCircle style={{width:"8rem",height:"10rem",margin:'1rem'}}></Image>
                        <div class="expertise">
                        <div>
                        <img src="symbol.png" style={{width:'8rem',height:'4rem' ,marginLeft:'65%'}}></img>
                        </div>
                        <h5>Area of expertise</h5>
                        Addiction, ADHD, Anxiety, Autism, Bipolar Disorder,
                          Depression, Developmental Delay, Downs Syndrome, 
                        Grief & Loss, Midlife Crisis, OCD, Personality Disorder, Phobia, 
                          Post Traumatic Stress Disorder (PTSD), Self Improvement, 
                          Sexual Dysfunction, Sleep, Social Anxiety, Stress, Workplace
                        </div>                        
                        </div>
                        <Button className="col-6 m-1" variant="outline-warning" size="lg" onClick={() => alert("Booking Successfully...\n you get Details of appointment once your slot booked and \n details mailed to you")}>MS. C. LAVANYA IYER</Button>
                        <Card.Subtitle className="px-3">Psychiatrist</Card.Subtitle>
                        <small className="px-3"> 5 years</small>
                    </Card>
                    </div>
                </div>
                <div class="doubledoc">
                    <div class="singledoc">
                    <Card style={{width:"40rem"}}>
                        <div class="aligningdoc"> 
                        <Image src="doc2.jpg" roundedCircle style={{width:"8rem",height:"10rem",margin:'1rem'}}></Image>
                        <div class="expertise">
                        <div>
                        <img src="symbol.png" style={{width:'8rem',height:'4rem' ,marginLeft:'65%'}}></img>
                        </div>
                        <h5>Area of expertise</h5>
                        Addiction, Anger, Anxiety, 
                        Bipolar Disorder, Depression, OCD,
                         Physical Health, Relationship, Self Improvement,
                          Sleep, Stress, Workplace
                        <br/><br/><br/><br/>
                            
                        </div>                        
                        </div>
                        <Button className="col-6 m-1" variant="outline-warning" size="lg" onClick={() => alert("Booking Successfully...\n you get Details of appointment once your slot booked and \n details mailed to you")}>DR. SANJAY NAIK</Button>
                        <Card.Subtitle className="px-3">Psychiatrist</Card.Subtitle>
                        <small className="px-3"> 8 years</small>
                    </Card>
                    </div>
                    <div class="singledoc">
                    <Card style={{width:"40rem"}}>
                        <div class="aligningdoc"> 
                        <Image src="doc3.jpg" roundedCircle style={{width:"8rem",height:"10rem",margin:'1rem'}}></Image>
                        <div class="expertise">
                        <div>
                        <img src="symbol.png" style={{width:'8rem',height:'4rem' ,marginLeft:'65%'}}></img>
                        </div>
                        <h5>Area of expertise</h5>
                        Addiction, ADHD, Anger, Anxiety, Bipolar Disorder, 
                        Child and Adolescent, Depression, OCD, Parenting,
                         Phobia, Physical Health, Relationship, Self Improvement,
                          Sleep, Stress, Workplace
                        <br/><br/><br/><br/>
                        </div>                        
                        </div>
                        <Button className="col-6 m-1" variant="outline-warning" size="lg" onClick={() => alert("Booking Successfully...\n you get Details of appointment once your slot booked and \n details mailed to you")}>DR. RUPALL J. SHAHH</Button>
                        <Card.Subtitle className="px-3">Psychiatrist</Card.Subtitle>
                        <small className="px-3"> 10 years</small>
                    </Card>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}