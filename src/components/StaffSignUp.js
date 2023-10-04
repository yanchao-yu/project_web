// import React from 'react';
import { useState } from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Axios from "axios"; 

const StaffSignUp = () => {
  const [inputs, setInputs] = useState({})

  const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    Axios.post('http://localhost:80/api/staffreg.php', inputs);

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
              
              
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="First Name" name='Staff_FirstName' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Last Name"  name='Staff_LastName' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text"  placeholder="Department" name='Staff_Department' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Enter" name='Staff_email' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">    
                <Form.Control type="password" placeholder="Password" name='Staff_Paasword' onChange={handleChange}/>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text"  placeholder="Module leader" name='module_leader' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text"  placeholder="Module title" name='module_title' onChange={handleChange}/>    
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="text"  placeholder="Module Code" name='module_code' onChange={handleChange}/>    
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

export default StaffSignUp
