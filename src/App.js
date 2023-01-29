
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
<<<<<<< HEAD
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/patients" element={<Patients/>}></Route>
          <Route path="/providers" element={<Providers/>}></Route>
=======
          <Route path="/" element={<MainPage></MainPage>}></Route>
          <Route path="/patients" element={<Patients role="patient"></Patients>}></Route>
          <Route path="/providers" element={<Patients role="provider"></Patients>}></Route>
<<<<<<< HEAD
>>>>>>> refs/remotes/origin/main
=======
>>>>>>> 707d0df26c1c325de8d3e9ed4d268cd6ff1bee9d
        </Routes>

      
        <div className='headerTitle'>
        </div>

      </Router>


      

    </>
  );
}

export default App;
