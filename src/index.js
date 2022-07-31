import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes,NavLink} from 'react-router-dom';
import {Nav,Navbar,Container} from 'react-bootstrap';
import Login from './Login';
import About from './About';
import Contact from './ContactUs';
import Register from './Register';
import Appointment from './Appointment';





// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const routing = (
  
  //link--> path -->Components
  <BrowserRouter>
  
          <Navbar bg='primary' variant="dark">
        <Container className='navbarcss'>
          <Navbar.Brand href="#" style={{fontWeight:"bolder",fontSize:'25px'}}>Doctors Appointment</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink  to="/">Home</NavLink>&nbsp;
            <NavLink to="/About">About US</NavLink>&nbsp;
            <NavLink to="/Contact">Contact Us</NavLink>&nbsp;
            <NavLink to="/Appointment">Consult Doctors</NavLink>&nbsp;
          </Nav>
        </Container>
      </Navbar>
    

    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="About" element={<About/>}></Route>
      <Route path="Contact" element={<Contact/>}></Route>
      <Route path="Login" element={<Login/>}></Route>
      <Route path="Register" element={<Register/>}></Route>
      <Route path="Appointment" element={<Appointment/>}></Route>
    </Routes>
  
  </BrowserRouter>
  
);

ReactDOM.render(routing,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
