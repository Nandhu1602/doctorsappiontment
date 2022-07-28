import {NavLink} from"react-router-dom";
import { useState } from "react";
import {Form,Button,Carousel} from "react-bootstrap";
import './About.css';


export default function Register(){
     const[uname,setUName] =useState("");
     const[age,setAge] =useState(0);
     const[emailId,setEmailId]=useState("");
     const[pwd,setPwd] =useState("");
     const[confirmPwd,setConfirmPwd] =useState("");

     function handleSubmit(event){
        if(pwd===confirmPwd){
            alert("you are Successfully Registered");
        }
        else{
            alert("Password and Confrim Password don't match");
        }
     }
     
     return(
    <div>
       
    <div class="sameline">
        <div class="registerCss">
             
            <h1>Registration Form</h1>
        
            <Form onSubmit={handleSubmit}>
            <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="text" id="floatingInput" placeholder="Enter email"  value={uname} onChange={(e)=>setUName(e.target.value)} />
                    <Form.Label for="floatingInput">Name</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="number" id="floatingInput" placeholder="Enter email"  value={age} onChange={(e)=>setAge(e.target.value)}/>
                    <Form.Label for="floatingInput">Age</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="email" id="floatingInput" placeholder="Enter email"  value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                    <Form.Label for="floatingInput">Email address</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" id="floatingInput" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    <Form.Label for="floatingInput">Password</Form.Label>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" id="floatingInput" placeholder="Password" value={confirmPwd} onChange={(e)=>setConfirmPwd(e.target.value)}/>
                    <Form.Label for="floatingInput">Confirm Password</Form.Label>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br/><br/>
                <label>For Existing User...</label>&nbsp;&nbsp;&nbsp;<NavLink to="/login">Login</NavLink>
                </Form>
                
        </div>
            <div class="filler">
                    <Carousel>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/carousel1.jpg"
                                alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/carousel2.jpg"
                                alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/carousel3.jpg"
                                alt="Third slide"
                                />
                            </Carousel.Item>
                    </Carousel>
           </div>   
      </div>
    </div>
     );
}