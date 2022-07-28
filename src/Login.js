import { useState } from "react";
import {NavLink} from "react-router-dom";
import {Form,Button,Image} from "react-bootstrap";

export default function Login(){

    const [emailId, setEmailId] =useState("");
    const[pwd,setPwd] = useState("");

    function handleSubmit(event){
        let strData =`User ID : ${emailId} and Password : ${pwd}`;
        alert(strData);
        event.preventDefault();
    }

    return(
    <div>
           <div class="videoplay">
        <video loop autoPlay>
            <source
            src="/healthpackage.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    </div>
        <div class="aligingitem">
        
        <div class="leftalign">
            <Image src="/workingimg.png" width={'500px'}></Image>
            <div >
                <h2> How DocOnline Works</h2>
                <p>  Using DocOnline helps to easily connect with doctor at a time and place suitable to you. 
                Here, we explain how your visit works.</p>
            </div>
        </div>
        <div class="loginCss">
            
            <h2>Login Form</h2>
                <Form onSubmit={handleSubmit}>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control type="email" id="floatingInput" placeholder="Enter email" value={emailId}  onChange={(e)=>setEmailId (e.target.value)}/>
                    <Form.Label for="floatingInput">Email address</Form.Label>
                </Form.Group>

                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" id="floatingInput" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                    <Form.Label for="floatingInput">Password</Form.Label>
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button> <br/><br/>
                <label>For new User Click Here...</label>&nbsp;&nbsp;&nbsp;<NavLink to="/register">Register</NavLink>
                </Form>
            </div>
     
        </div>
    </div>
    );
}