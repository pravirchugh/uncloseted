
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
  return (
    <>
    <Router>
      
        {/* Potential Routes listed here: */}
        <Routes> 
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/patients" element={<Patients/>}></Route>
          <Route path="/providers" element={<Providers/>}></Route>
        </Routes>
      
        <div className='headerTitle'>
        </div>

      </Router>


      

    </>
  );
}

export default App;
