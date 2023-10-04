import React, { useContext, useState } from 'react'
import {AiFillStar} from 'react-icons/ai';
import './ProjectCard.css';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../context/UserContextProvider';
import axios from 'axios';
import { Modal } from 'react-bootstrap';

const ProjectCard = (props) => {
  const image = props.difficulty;
  const stars = [];
  const [message, setMessage] = useState();
  const [show, setShow] = useState(false);
  let navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  for(let i=0; i<image; i++){
    stars.push(<AiFillStar />);
  }

  const {user} = useContext(UserContext);
  const{role} = user || {};
  
  const handleDelete = async(id) => {
    
    try {
      await axios.delete('http://localhost/napier/deleteProject.php',{data: id}).then((response) => {
        setMessage(response.data.msg);
        if(response.data.status === 200){
          setTimeout(() => {
            handleShow();
            navigate('/ProjectPage');
          },3000);
          handleClose();
        }
        
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div className='projectCard_container'>
        <h5 className='projectCard_column'> Project ID:- {props.id}</h5>
        <h5 className='projectCard_column'> Project Title:- {props.name}</h5>
        <h5 className='projectCard_column'>Supervisor:- {props.supervisor}</h5>
        <p className='projectCard_column'>Difficulty Level:- {stars}</p>
        <Link className='projectCard_column btn btn-primary' to={{
          pathname: `../ProjectView/${props.id}`
        }}>View</Link>

        {role === 'staff' ? (
          <React.Fragment>
          <Link className='projectCard_column btn btn-warning' to={{
            pathname:`../EditPage/${props.id}`
          }}>Edit</Link>
          <button className='projectCard_column btn btn-success'>Sign To</button>
          <button className='projectCard_column btn btn-danger' onClick={() => {handleDelete(props.id)}}>Remove</button>
          </React.Fragment>
        ):(
          <Link className='projectCard_column btn btn-success' to={`/ApplicationPage/${props.id}`}>Apply</Link>
        )
        }

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edinburgh University</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
        </Modal>
        
    </div>
  )
}

export default ProjectCard