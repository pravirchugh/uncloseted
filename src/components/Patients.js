import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";

let [idx, setIdx] = useState([]);
let [names, setNames] = useState([]);
let [equitable, setEquitable] = useState([]);
let [understanding, setUnderstanding] = useState([]);
let [kind, setKind] = useState([]);


function Patients() {
    return (
        <>
            <Link to="/">
                <button className='button'>Main Page</button>
            </Link> 

            <div style={{margin: 'auto', width: '60%'}}>
            {idx.map(

                (experience) => { return 

                    <div>
                        
                    </div>
            })}
            </div>

        </>


    )
}
export default Patients;
