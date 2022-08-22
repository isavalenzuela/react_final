import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='larnu-logo' src='bootcamp.png' alt='logo'></img>
      <NavLink to='/'>
        Dashboard
      </NavLink>
      <NavLink to='/myskills'>
        My Skills
      </NavLink>
    </div>
  )
}

export default Sidebar