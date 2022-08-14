import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className='dashboard-main'>
        <h3>Hello, I'm Isa</h3>
        <p>This is the final project for ReactJS module</p>
        <div className='about-me'>
          <div className='about-me--container'>
            <h3>About me</h3>
            <img className='about-me--photo' src="foto.jpeg" alt="" />
          </div>
          <div className='about-me-desc'>My name is Camila Isadora Valenzuela Fierro
            and I'm a software engineer student, cat mama and coffee lover.
            I'm also a sociologist and as such, I believe we
            learn and work better when we make connections with others.

          </div>
          <div>This comes from an API</div>
        </div>
        <div className='my-projects'>
          <h3>My Projects</h3>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard