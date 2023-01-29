import React, {useState} from 'react';
import './App.css';
import MainPage from './components/MainPage.js';
import Patients from './components/Patients.js';
import Providers from './Providers.js';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Link
} from "react-router-dom";

function App() {
  let [prov, setProv] = useState([
    [0, "John A.", 3, 2, 1, 2],
    [1, "Serena B.", 4, 3, 4, 2],
    [2, "Tom C.", 2, 2, 1, 2],
  ]);
  return (
    
    <>
    <Router>
      
        {/* Potential Routes listed here: */}
        <Routes> 
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/patients" element={<Patients providers={prov} setProviders = {setProv}/>}></Route>
          <Route path="/providers" element={<Providers providers={prov} setProviders = {setProv}/>}></Route>
        </Routes>
      
        <div className='headerTitle'>
        </div>

      </Router>


      

    </>
  );
}

export default App;
