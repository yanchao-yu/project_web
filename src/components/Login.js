import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import Sign_img from './Sign_img';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  let navigate = useNavigate();
  const [Staff_Email, setStaff_Email] = useState("");
  const [Staff_Password, setStaff_Password] = useState("");
  const [StaffLoginStatus, setStaffLoginStatus] = useState("");

  const staff_registration = (e) => {
    e.preventDefault();
    const sendData = {
      Staff_Email: Staff_Email,
      Staff_Password: Staff_Password,
    }


    axios.post("http://localhost:80/api/staffLogin.php", sendData).then((response) => {
      
      if(response.data.status === 1){
        setStaffLoginStatus(response.data.message);
        navigate('/Stu_Application');
      }else{
        setStaffLoginStatus(response.data[0].Student_Email);
      }
    })
  }
  return (
    <>
    
      <Container className='mt-5 align-items-center'>
        <Row>
        <Col></Col>
            <Col md={4}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor: '#DC3545'}}>
                        <h4>Login</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor : '#f7f5f0'}}>
            <Form>
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Username" onChange={(e) => {setStaff_Email(e.target.value)}}/>    
              </Form.Group>

              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">    
                <Form.Control type="password" placeholder="Password" onChange={(e) => {setStaff_Password(e.target.value)}}/>
              </Form.Group>

              <h6>OR</h6>
              <NavLink to="/StaffSignUp"><p>Create new account</p></NavLink>
              
              <Button variant="danger" className='col-lg-4' type="submit" onClick={staff_registration}>
                Login
              </Button>
            </Form>
          {/* <Sign_img /> */}
          </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>

      </Container>
  
    </>
  )
}

export default Login