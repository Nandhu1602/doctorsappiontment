import {NavLink} from"react-router-dom";
import { useState } from "react";
import {Form,Button,Image} from "react-bootstrap";
import './About.css';
import Footer from "./Footer";

export default function Register(){
     const[uname,setUName] =useState("");
     const[age,setAge] =useState('');
     const[emailId,setEmailId]=useState("");
     const[pwd,setPwd] =useState("");
     const[confirmPwd,setConfirmPwd] =useState("");
     const [validated, setValidated] = useState(false);
    
     

     function handleSubmit(event){
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            if(pwd===confirmPwd){
                alert("you are Successfully Registered...");
            }
            else{
                alert("Password and Confrim Password don't match");
            }
        }
    
        setValidated(true);    
     }
     
     return(
    <div>
       
    <div class="sameline">
        <div class="registerCss">
             
            <h1>Registration Form</h1>
        
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control  required type="text" id="floatingInput" placeholder="Enter email"  value={uname} onChange={(e)=>setUName(e.target.value)} />
                    <Form.Label for="floatingInput">Name</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                    Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="number" id="floatingInput" placeholder="Enter email"  value={age} onChange={(e)=>setAge(e.target.value)}/>
                    <Form.Label for="floatingInput">Age</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                     Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="form-floating mb-3" controlId="formBasicEmail">        
                    <Form.Control required type="email" id="floatingInput" placeholder="Enter email"  value={emailId} onChange={(e)=>setEmailId(e.target.value)}/>
                    <Form.Label for="floatingInput">Email address</Form.Label>
                    <Form.Text className="text-muted">
                    </Form.Text>
                    <Form.Control.Feedback tooltip type="invalid">
                     Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control required type="password" id="floatingInput" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                    <Form.Label for="floatingInput">Password</Form.Label>
                    <Form.Control.Feedback tooltip type="invalid">
                    Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="form-floating mb-3" controlId="formBasicPassword">
                    <Form.Control required type="password" id="floatingInput" placeholder="Password" value={confirmPwd} onChange={(e)=>setConfirmPwd(e.target.value)}/>
                    <Form.Label for="floatingInput">Confirm Password</Form.Label>
                    <Form.Control.Feedback tooltip type="invalid">
                    Please provide a correct Details
                    </Form.Control.Feedback>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button> <br/><br/>
                <label>For Existing User...</label>&nbsp;&nbsp;&nbsp;<NavLink to="/login">Login</NavLink>
                </Form>
                
        </div>
            <div class="filler">

                    <div>
                        <Image src="doctors.png" style={{width:'750px'}}></Image>
                    </div>
           </div>   
      </div>
      <Footer/>
    </div>
     );
}