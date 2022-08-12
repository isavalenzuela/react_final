import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import LayoutView from './layout/LayoutView';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LayoutView/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
