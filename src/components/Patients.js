import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";



function Patients() {

    let [providers, setProviders] = useState([
        [0, "John A.", 3, 2, 1, 2],
        [1, "Serena B.", 4, 3, 4, 2],
        [2, "Tom C.", 2, 2, 1, 2],
    ]);
    

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
        newProviders[index][3] = newProviders[index][3] + 1;
        setProviders(newProviders);
    }

    function increaseKnowledge(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][4] = newProviders[index][4] + 1;
        setProviders(newProviders);
    }

    function increaseCompassion(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        newProviders[index][5] = newProviders[index][5] + 1;
        setProviders(newProviders);
    }


    return (
        <>
            <Link to="/">
                <button className='button'>Main Page</button>
            </Link> 

            <div style={{margin: 'auto', display: "flex", justifyContent: "center"}}>
                {providers.map(

                    (provider) => { return <div className="providerDiv">
                        {provider[1]} 
                        
                        <button onClick={() => increaseCount(provider[0])}>I had this provider - {provider[2]}</button>
                        <button onClick={() => increaseEquitable(provider[0])}>This provider was equitable - {provider[3]}</button>
                        <button onClick={() => increaseKnowledge(provider[0])}>This provider was knowledgable - {provider[4]}</button>
                        <button onClick={() => increaseCompassion(provider[0])}>This provider was compassionate - {provider[5]}</button>
                        
                        </div>
                    })}
            </div>

        </>


    )
}
export default Patients;
