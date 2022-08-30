import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MySkills from './components/MySkills';
import MyProjects from './components/MyProjects';
import LayoutView from './layout/LayoutView';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutView/>}>
          <Route index element={<Dashboard/>}/>
          <Route path='/myskills' element={<MySkills/>}/>
          <Route path='/myprojects' element={<MyProjects/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
