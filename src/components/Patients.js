import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";
import "./Patients.css";
function Patients(props) {
    
    function increaseCount(index) {
        if(!props.providers[index][6]){
            // console.log(index);
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][2] = newProviders[index][2] + 1;
            newProviders[index][6] = !newProviders[index][6];
            props.setProviders(newProviders);
            
        } else {
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][2] = newProviders[index][2] - 1;
            newProviders[index][6] = !newProviders[index][6];
            props.setProviders(newProviders);
            
        }
    }

    function increaseEquitable(index) {
        if(!props.providers[index][7]){
            // console.log(index);
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][3] = Math.min(newProviders[index][3] + 1, newProviders[index][2]);
            newProviders[index][7] = !newProviders[index][7];
            props.setProviders(newProviders);
        } else {
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][3] = newProviders[index][3] - 1;
            newProviders[index][7] = !newProviders[index][7];
            props.setProviders(newProviders);
            
        }
    }

    function increaseKnowledge(index) {
        if(!props.providers[index][8]){
            // console.log(index);
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][4] = Math.min(newProviders[index][4] + 1, newProviders[index][2]);
            newProviders[index][8] = !newProviders[index][8];
            props.setProviders(newProviders);
        } else {
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][4] = newProviders[index][4] - 1;
            newProviders[index][8] = !newProviders[index][8];
            props.setProviders(newProviders);
        }
    }

    function increaseCompassion(index) {
        if(!props.providers[index][9]){
            // console.log(index);
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][5] = newProviders[index][5] + 1;
            newProviders[index][9] = !newProviders[index][9];
            props.setProviders(newProviders);
        } else {
            let newProviders = [...props.providers];
            // console.log(newProviders[index][2]);
            newProviders[index][5] = newProviders[index][5] - 1;
            newProviders[index][9] = !newProviders[index][9];
            props.setProviders(newProviders);
        }
    }

    function registerNewProvider(txt) {
        let newProviders = [...props.providers];
        console.log(txt);
        let lastArray = [props.providers.length, txt, 0, 0, 0, 0, false, false, false, false];
        newProviders.push(lastArray);
        props.setProviders(newProviders);
    }

    return (
        <>
            <br></br>

            <h1 style={{textAlign: "center"}}>Patient Portal</h1>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
            {props.providers.map(
                (provider) => { return <div className="providerDiv" style={{display: "flex", flexDirection: "row"}}>
                    <h2 style={{marginRight: "20px"}}>{provider[1]}</h2>         
                    <button onClick={() => increaseCount(provider[0])} className="incrementBtn">I had this provider - <b>{provider[2]}</b></button>
                    <button onClick={() => increaseEquitable(provider[0])} className="incrementBtn">This provider was equitable - <b>{provider[3]}</b></button>
                    <button onClick={() => increaseKnowledge(provider[0])} className="incrementBtn">This provider was knowledgable - <b>{provider[4]}</b></button>
                    <button onClick={() => increaseCompassion(provider[0])} className="incrementBtn">This provider was compassionate - <b>{provider[5]}</b></button>
                    <br></br>                 
                    </div>
                })}
            </div>
            <div>
                {/* <h2 style={{textAlign: "center"}}>Add a provider:</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <input type="text" id="name1" placeholder='Name'></input>
                    <button type="submit" onClick={() => registerNewProvider(document.getElementById("name1").value)}>Submit.</button>
                </div> */}
              </div>

                <br></br>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Link to="/">
                    <button className='button'>Main Page</button>
                </Link> 
            </div>
        </>
    )
    
   /*
   function doctor(docName, knowledgeVal, compassionVal, equitableVal){
         return {
              name: docName,
              knowledge: knowledgeVal,
              compassion: compassionVal,
              equitability: equitableVal
         }
   }
   let docArray = [doctor("John", 3, 2, 1), doctor("Serena", 4, 3, 4), doctor("Tom", 2, 2, 1)];
    let docList = "";

   useEffect(() => {
    docArray[0].name = "peter";
   }, docArray);

   function registerNewProvider(txt) {
        docArray[0].name = "txt";
        docArray.push(doctor("txt", 0, 0, 0));

    }


    return (
        <>
        <text>{docArray[0].name}</text>
        
        <h2>Add a provider:</h2>
        <input type="text" id="name1" placeholder='Name'></input>
        <button type="submit" onClick={registerNewProvider(document.getElementById('name1').textContent)}>Submit</button>
        </>
        );
        */
}
export default Patients;