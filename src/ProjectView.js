import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import Project from './components/Project';

const ProjectView = () => {
    const[project, setProject] = useState();
    const {id} = useParams();

    const createProjects = (project, i) => {
      return(
        <Project
          key = {i}
          id = {project.Project_ID}
          name = {project.Project_Title}
          supervisor = {project.supervisor}
          difficulty = {project.difficulty_level}
          description = {project.Project_Description}
          capacity = {project.capacity}
          skills = {project.require_tools}
        />
      )
    }

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
  return (
    <div className='container'>
        <Link to={'/Projectpage'} className='btn btn-primary'>View All Project</Link>
        {
            project ? (
              <>
                {
                  project.map((createProjects))
                }
              </>
            ):(
                <p>Loading...</p>
            )
        }
        
    </div>
  )
}

export default ProjectView