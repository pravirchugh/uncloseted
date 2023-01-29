import React, {useState, useEffect} from 'react';
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


    function increaseCount(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][2] = newProviders[index][2] + 1;
        setProviders(newProviders);
    }

    function increaseEquitable(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][3] = Math.min(newProviders[index][3] + 1, newProviders[index][2]);
        setProviders(newProviders);
    }

    function increaseKnowledge(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][4] = Math.min(newProviders[index][4] + 1, newProviders[index][2]);
        setProviders(newProviders);
    }

    function increaseCompassion(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][5] = Math.min(newProviders[index][5] + 1, newProviders[index][2]);
        setProviders(newProviders);
    }

    function registerNewProvider(txt) {
        let newProviders = [...providers];
        console.log(txt);
        let lastArray = [providers.length, txt, 0, 0, 0, 0];
        newProviders.push(lastArray);
        setProviders(newProviders);
    }

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
