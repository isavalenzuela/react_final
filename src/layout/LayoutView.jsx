import React from 'react'
import { Outlet } from 'react-router-dom';
import ToDos from '../components/ToDos';
import Sidebar from '../components/Sidebar';
import './LayoutView.css';

const LayoutView = () => {
  return (
    <div className='main'>
      <Sidebar />
      <Outlet />
      <ToDos />
    </div>
  )
}

export default LayoutView