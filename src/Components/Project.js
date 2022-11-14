import React from 'react'

const Project = ({prj}) => {
  return (
    <div className='project' >
        <img src={prj.project_img} alt={prj.project_name}/>
        <div className='project__tag'>{prj.project_concept}</div>
        <h2>{prj.project_name}</h2>
        <p>{prj.project_detail}</p>
    </div>
  )
}

export default Project