import React, {useState, useEffect, useContext} from 'react'
import './components/EditPage.css';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import UserContext from './context/UserContextProvider';

const ApplicationPage = () => {
    const {user} = useContext(UserContext);
    let navigate = useNavigate();
    const {id} = useParams();
    const [project, setProject] = useState({
        Project_ID: "",
        Project_Title: "",
        supervisor: "",
        application_title: "",
        Personal_Statement: "",
        cv: ""
    });
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { Project_ID, Project_Title, application_title, Personal_Statement, supervisor, cv } = project;

    const{ID, firstName, lastName, email} = user || '';

    const getDetails = () => {
        const project_id = {
            ID: id
        }
        if (id) {
            axios.post("http://localhost:80/napier/getProjdata.php", project_id).then((response) => {
                setProject(response.data);
            });
        }
    }

    useEffect(() => {
        
        getDetails();
    }, []);

    const handleSubmit = () => {

        const sendData = {
            ...project,
            student_id: ID,
            student_name: firstName+lastName,
            student_email: email
        }

        try {
            axios.post("http://localhost:80/napier/application.php", sendData).then((response) => {
                setMessage(response.data.msg);
            })
            handleDiscard();
            handleShow();
            setTimeout(() => {
                navigate('/ProjectPage');
            },3000);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setProject({
            ...project,
            [name]: value
        })
    }

    const handleDiscard = () => {
        setProject({
            Project_ID: "",
            Project_Title: "",
            supervisor: "",
            application_title: "",
            Personal_Statement: "",
            cv: ""
        });
    }
  return (
    <div className="container2">

            <h2>Project Edit Page</h2>
            <form className="form2">


                <div className="flex">
                     
                    <label htmlFor="Project_ID" className="inline">
                        Project ID
                        <input type="text" name="Project_ID" id="Project_ID" className="inline-input" placeholder="Project ID" value={Project_ID} onChange={handleChange} />
                    </label>
                    
                    
                    <label htmlFor="Title" className="inline">
                        Title
                        <input type="text" name="Project_Title" id="Title" className="inline-input" defaultValue={''} placeholder="Title" value={Project_Title} onChange={handleChange} />
                    </label>

                </div>

                <div className="flex">

                    <label htmlFor="Supervisor" className="inline">
                        Supervisor
                        <input type="text" name="supervisor" id="Supervisor" className="inline-input" placeholder="Supervisor" value={supervisor} onChange={handleChange} />
                    </label>

                </div>

                <div className='flex'>
                    <label htmlFor="Application" className="inline">
                        Application Title
                        <input type="text" name="application_title" id="Application" className="inline-input" placeholder="Application Title" value={application_title} onChange={handleChange} />
                    </label>
                </div>

                <label htmlFor="Personal_Statement" className="block">
                    Personal Statement
                    <textarea type="text" name="Personal_Statement" id="Personal_Statement" className="block-input" value={Personal_Statement} onChange={handleChange} />

                </label>

                <label htmlFor="cv" className="block">
                    Please Upload Your CV:
                    <input type="file" name="cv" id="cv" accept="application/pdf" value={cv} onChange={handleChange} />

                </label>

                
                <div>
                    <Button variant="primary" className="save-btn" onClick={handleSubmit}>Submit</Button>


                    <Button variant="danger" className="remove-btn" onClick={handleDiscard}>Discard</Button>{' '}
                </div>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edinburgh University</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
            </Modal>

        </div>

  )
}

export default ApplicationPage