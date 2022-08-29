import React, { useEffect, useState } from 'react'

import { fetchVercelProjects } from '../services/getProjects'
import MyProject from './MyProject';

const Dashboard = () => {

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
    <div className='dashboard'>
      <div className='dashboard-main'>
        <h1>Hello, I'm Isa</h1>
        <div className='about-me'>
          <div className='about-me--container'>
            <h3>About me</h3>
            <img className='about-me--photo' src="foto.jpeg" alt="" />
          </div>
          <div className='about-me--desc'>My name is Camila Isadora Valenzuela Fierro
            and I'm a software engineer student, cat mom and coffee lover.
            I'm also a sociologist and as such, I believe we
            learn and work better when we make connections with others.

          </div>
          <div>This section is under construction 🛠</div>
        </div>
        <div className='my-projects'>
          <h3>My Projects</h3>
          <div className='my-projects-cards'>
            {
              projects.map(project => {
                return <MyProject
                  name={project.name}
                  deployLink={project.alias}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard