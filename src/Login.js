import { useState } from "react";
import {NavLink} from "react-router-dom";
import {Form,Button,Image} from "react-bootstrap";
import Footer from "./Footer";
import Donations from "./Donations";

export default function Login(){
    const [validated, setValidated] = useState(false);

    const [emailId, setEmailId] =useState("");
    const[pwd,setPwd] = useState("");

    function handleSubmit(event){
        const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else{
        let strData =`User ID : ${emailId} and Password : ${pwd}`;
        if(emailId=="abc@gmail.com" && pwd=="abc"){
            alert("Login success full...");
        }
        else{
            alert("Invalid user name or password");
        }

      }
  
      setValidated(true);

       
        event.preventDefault();
    }

    return(
    <div>
        <div class="videoplay" style={{width:'100%'}}>
        <div style={{marginRight:'1%'}}>
            <video loop controls autoPlay={"autoplay"} muted >
            <source
            src="/organ.mp4"
            type="video/mp4"
            />
            Your browser does not support the video tag.
             </video>
        </div>

        <div class="donation" style={{width:"50%",margin:'1%'}}>
            <Donations/>
        </div>
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
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="email" id="floatingInput" placeholder="Enter email" value={emailId}  onChange={(e)=>setEmailId (e.target.value)}/>
                    <Form.Label for="floatingInput">Email address</Form.Label>
                    <Form.Control.Feedback tooltip type="invalid">
                     Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control required type="password" id="floatingInput" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)} />
                    <Form.Label for="floatingInput">Password</Form.Label>
                    <Form.Control.Feedback tooltip type="invalid">
                     Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button variant="primary" type="submit" >
                    Submit
                </Button> <br/><br/>
                <label>For new User Click Here...</label>&nbsp;&nbsp;&nbsp;<NavLink to="/register">Register</NavLink>
                </Form>
            </div>
     
        </div>
        <Footer/>
    </div>
    );
}