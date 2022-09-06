import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img className='larnu-logo' src='bootcamp.png' alt='logo'></img>
      <NavLink to='/' className="sidebar-link">
        Home
      </NavLink>
      <NavLink to='/myprojects' className="sidebar-link">
        My Projects
      </NavLink>
      <NavLink to='/myskills' className="sidebar-link">
        My Skills
      </NavLink>
      <footer className="app__footer">made with love 🖤 by <a href="https://www.linkedin.com/in/camila-isadora-valenzuela-fierro-a91921147/" className="app__footer__text">isavalenzuela</a></footer>
    </div>
  )
}

export default Sidebar