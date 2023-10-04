import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';


const Log = () => {
  return (
    <>
<Container className='mt-3'>
        <Row>
        <Col></Col>
            <Col md={4}>
                <Card className="shadow-lg">
                    <Card.Header className="p-3" style={{backgroundColor: '#DC3545'}}>
                        <h4>Select login</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor : '#f7f5f0'}}>

            <Row>
                <Col className='mt-3 mb-3'><NavLink to="/StuLogin"><Button variant="danger">Student</Button>{' '}</NavLink> </Col>
                <Col className='mt-3 mb-3'><NavLink to="/login"><Button variant="danger">Staff</Button>{' '}</NavLink> </Col>
                
            </Row>
                </Card.Body>
                </Card>
            </Col>
            <Col></Col>
        </Row>

      </Container>

      
    </>
  )
}

export default Log