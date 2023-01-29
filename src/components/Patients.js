import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";



function Patients(props) {

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
        let lastArray = [providers.length, txt, 0, 0, 0];
        newProviders.push(lastArray);
        setProviders(newProviders);
    }

    return (
        <>
            <Link to="/">
                <button className='button'>Main Page</button>
            </Link> 

        

            <div style={{margin: 'auto', display: "flex", justifyContent: "center", flexDirection: "column"}}>
            {providers.map(

                (provider) => { return <div className="providerDiv" style={{display: "flex", flexDirection: "row"}}>
                    <h2 style={{marginRight: "20px"}}>{provider[1]}</h2>

                    
                    <button onClick={() => increaseCount(provider[0])} className="incrementBtn">I had this provider - {provider[2]}</button>
                    <button onClick={() => increaseEquitable(provider[0])} className="incrementBtn">This provider was equitable - {provider[3]}</button>
                    <button onClick={() => increaseKnowledge(provider[0])} className="incrementBtn">This provider was knowledgable - {provider[4]}</button>
                    <button onClick={() => increaseCompassion(provider[0])} className="incrementBtn">This provider was compassionate - {provider[5]}</button>
                    <br></br>
                    
                    </div>
                })}
            </div>

            

           

            <div>
                <h2>Add a provider:</h2>

                <input type="text" id="name1" placeholder='Name'></input>

                <button type="submit" onClick={() => registerNewProvider(document.getElementById("name1").value)}>Submit</button>
            </div>

           

        </>


    )
}
export default Patients;
