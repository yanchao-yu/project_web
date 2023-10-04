import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';

const Home = () => {
  return (
    <>
      <div className='container mt-3'>
        <section className='d-flex justify-content-between'>
          <div className='left_data mt-3' style={{width:'100%'}}>
            <h3 className='text-center col-lg-6'>Sign Up</h3>
            <Form>
              

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="First Name" />    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Last Name" />    
              </Form.Group>

              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Department" />    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />    
              </Form.Group>

              
              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Module leader" />    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Module title" />    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicEmail">
                <Form.Control type="text" placeholder="Module Code" />    
              </Form.Group>

              <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">    
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              
              
              <Button variant="primary" className='col-lg-4' style={{background:'rgb(67,185,127)'}} type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <Sign_img />
        </section>
      </div>
    </>
  )
}

export default Home
