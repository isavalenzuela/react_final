import React, { useEffect, useState } from 'react'
import { fetchVercelProjects } from '../services/getProjects'
import MyCard from './MyCard';

const MyProjects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    startFetch();
  }, [])

  const startFetch = async () => {
    const vercelProjects = await fetchVercelProjects();
    console.log(vercelProjects);
    setProjects(vercelProjects);
  }

  return (
    <div className='myprojects'>
      <h1 className='myprojects-title'>My Projects</h1>
      <div className='myprojects-cards'>
        {
          projects.map(project => {
            return <MyCard
              name={project.name}
              deployLink={project.alias}
            />
          })
        }
      </div>
    </div>
  )
}

export default MyProjects