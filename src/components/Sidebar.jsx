import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='larnu-logo' src='bootcamp.png' alt='logo'></img>
      <NavLink to='/' className="sidebar-link">
        Dashboard
      </NavLink>
      <NavLink to='/myskills' className="sidebar-link">
        My Skills
      </NavLink>
    </div>
  )
}

export default Sidebar