import React, { useContext, useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import UserContext from './context/UserContextProvider';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const Applucations = () => {
    const [application, setApplication] = useState();
    const {user} = useContext(UserContext);
    const{ID} = user || ''; 

    const [show, setShow] = useState(false);
    const [message, setMessage] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getDetails = async() => { 

        try {
            await axios.post("http://localhost/napier/getApplication.php", ID).then((response) => {
                setApplication(response.data);
            })
        } catch (error) {
            console.log(error);  
        }
    }

    const getData = (data) => {
        return(
            <React.Fragment>
                <tr>
                    <td>{data.application_id}</td>
                    <td>{data.student_name}</td>
                    <td>{data.student_email}</td>
                    <td>{data.project_name}</td>
                    <td>{data.status}&nbsp;&nbsp;&nbsp; {data.application_id === 0 ? <button className='btn btn-success' onClick={()=>signTo(data.application_id)}>Sign</button> : <button className='btn btn-success' onClick={()=>signTo(data.application_id)}>Un Sign</button>}</td>
                </tr>
            </React.Fragment>
        )  
    }
  

    const signTo = async(id) => {
        const sendData = {      
            application_id: id
        }
        try {
            await axios.post("http://localhost:80/napier/updateApplication.php", sendData).then((response) => {
                setMessage(response.data.msg);
            })
            
            setTimeout(() => {
                handleShow();
            },3000);
        } catch (error) {
            
        }
    } 

    useEffect(() => {
        getDetails();
    },[]);

  return (
    <div className='container'>
        <Table striped bordered hover>
        <thead>
            <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Applied Project</th>
            <th>Signed Project</th>
            </tr>
        </thead>
        <tbody>
        {application && 
            
            application.map((getData))
            
        }
        </tbody>
        </Table>

        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edinburgh University</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
            </Modal>
    </div>
  )
}

export default Applucations