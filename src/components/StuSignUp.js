// import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
// import React, {useState} from "react";
import Axios from "axios"; 

const StuSignUp = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:80/api/user/save', inputs);

    console.log(inputs);
  }
  return (
    <>
      <Container className='mt-3'>
        <Row>
        <Col></Col>
            <Col md={4}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor: '#DC3545'}}>
                        <h4>Register</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor : '#f7f5f0'}}>
            <Form onSubmit={handleSubmit}>
              
              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name" name='Student_FirstName' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name"  name='Student_LastName' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" name='Student_Email' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">    
                <Form.Control type="password" placeholder="Password" name='Student_Password' onChange={handleChange}/>
              </Form.Group>
              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text"  placeholder="Program Title" name='Student_Programmtitle' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Entry Year" name='Student_enteryyear' onChange={handleChange}/>    
              </Form.Group>
              
              
              <Button variant="danger" className='col-lg-4' type="submit" >
                Submit
              </Button>
              
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

export default StuSignUp
