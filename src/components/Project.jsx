import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import './Project.css';

const Project = (props) => {
    const image = props.difficulty;
    const stars = [];
    
    for(let i=0; i<image; i++){
        stars.push(<AiFillStar />);
    }

    
  return (
    <div className='project_container'>
        <h5 className='project_column'> Project ID:- {props.id}</h5>
        <h5 className='project_column'> Project Title:- {props.name}</h5>
        <h5 className='project_column'>Supervisor:- {props.supervisor}</h5>
        <p className='project_column'>Difficulty Level:- {stars}</p>
        
        <p className='project_column'>Description:- {props.description}</p>
        <p className='project_column'>Required Skills :- {props.skills}</p>
        <p className='project_column'>Capacity:- {props.capacity}</p>
        
    </div>
  )
}

export default Project