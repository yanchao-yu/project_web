// import React from 'react';
import Form from 'react-bootstrap/Form';
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import React, {useState} from "react";
import Axios from "axios"; 


const StuLogin = () => {
  let navigate = useNavigate();
  const [Student_Email, setStudent_Email] = useState("");
  const [Student_Password, setStudent_Password] = useState("");
  const [StuLoginStatus, setStuLoginStatus] = useState("");

  const student_registration = (e) => {
    e.preventDefault();
    const sendData = {
      Student_Email: Student_Email,
      Student_Password: Student_Password,
    }


    Axios.post("http://localhost:80/api/login.php", sendData).then((response) => {
      if(response.data.status === 1){
        setStuLoginStatus(response.data.message);
        navigate('/Stu_Application');
      }else{
        setStuLoginStatus(response.data[0].Student_Email);
      }
    })
  }

  return (
    <>
      <Container className='mt-3'>
        <Row>
        <Col></Col>
            <Col md={4}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor: '#DC3545'}}>
                        <h4>Login</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor : '#f7f5f0'}}>
            <Form>
              
              <Form.Group className="mb-3 col-lg-12" controlId="formBasicEmail">
                <Form.Control type="email" onChange={(e) => {setStudent_Email(e.target.value)}} placeholder="Enter email" />    
              </Form.Group>

              <Form.Group className="mb-2 col-lg-12" controlId="formBasicPassword">    
                <Form.Control type="password" onChange={(e) => {setStudent_Password(e.target.value)}} placeholder="Password" />
              </Form.Group>
             
              <h6>OR</h6>
              <NavLink to="/StuSignUp"><p>Create new account</p></NavLink>

              <Button variant="danger" className='col-lg-4' type="submit" onClick={student_registration}>
                Login
              </Button>
              
              
              <h3 className='text-center col-lg-6'>{StuLoginStatus}</h3>
            </Form>
            </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>

      </Container>
    </>
  )
}

export default StuLogin