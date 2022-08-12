import React from 'react'
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <NavLink to='/'>
        Home
      </NavLink>
      <NavLink to='/login'>
        Login
      </NavLink>
    </div>
  )
}

export default Sidebar