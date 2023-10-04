import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios';


const ProjectEdit = () => {
    const{id} = useParams();
    const[project, setProject] = useState({
        Project_ID: "",
        Project_Title: "",
        Project_Description: "",
        capacity: "",
        difficulty_level: "",
        email: "",
        module_id: "",
        require_tools: "",
        supervisor: ""
    });

    const {Project_ID, Project_Title, Project_Description, capacity, difficulty_level, email, module_id, require_tools, supervisor} = project;

    const getDetails = () =>{
        const project_id = {
          ID: id
        }        
        axios.post("http://localhost:80/napier/getProjectData.php", project_id).then((response) => {
            setProject(response.data);
        }); 
    }

    useEffect(() => {
        getDetails();
    },[])

    const handleChange = (event) => {
        const{name, value} = event.target;
        setProject({
            ...project,
            [name]:value
        })
    }

    console.log(Project_Title);
  return (
    <div className='container'>
        <Link to={'/Projectpage'} className='btn btn-primary'>View All Project</Link>
        <div className='container_Edit'>
            
            <div className="edit_column">
                <h3>Project ID:- </h3> <input type="text" name='Project_ID' placeholder='Project ID' onChange={handleChange} value={Project_ID}/>
            </div>
            <div className="edit_column">
                <h3>Project Title:- </h3> <input type='text' name='Project_Title' placeholder='Project Title' onChange={handleChange} value={Project_Title}/> 
            </div>
            <div className="edit_column">
                <h3>Project Description:- </h3> <textarea name='Project_Description' placeholder='Description' onChange={handleChange} value={Project_Description} rows={8} cols={50}/>
            </div>
            <div className="edit_column">
                <h3>Module ID:- </h3> <input type="text" name='module_ID' placeholder='Module ID' onChange={handleChange} value={module_id}/>
            </div>
            <div className="edit_column">
                <h3>Difficulty Level:- </h3> <input type="number" name='Difficulty' placeholder='Difficulty' onChange={handleChange} value={difficulty_level}/>
            </div>
            <div className="edit_column">
                <h3>Capacity:- </h3> <input type="number" name='Capacity' placeholder='Capacity' onChange={handleChange} value={capacity}/>
            </div>
            <div className="edit_column">
                <h3>Email:- </h3> <input type="text" name='Email' placeholder='abc@gmail.com' onChange={handleChange} value={email}/>
            </div>
            <div className="edit_column">
                <h3>Require Tools:- </h3> <input type="text" name='Require Tools' placeholder='Tools' onChange={handleChange} value={require_tools}/>
            </div>
            <div className="edit_column">
                <h3>Supervisor:- </h3> <input type="text" name='Supervisor' placeholder='Supervisor' onChange={handleChange} value={supervisor}/>
            </div>
        </div>
    </div>
  )
}

export default ProjectEdit