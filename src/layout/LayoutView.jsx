import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './LayoutView.css';

const LayoutView = () => {
  return (
    <div className='main'>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default LayoutView