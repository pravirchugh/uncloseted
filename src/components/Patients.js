import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";

function Patients(props) {

        let [countChecked, setCountChecked] = useState(false);
        let [knowledgeChecked, setKnowledgeChecked] = useState(false);
        let [compassionChecked, setCompassionChecked] = useState(false);
        let [equitableChecked, setEquitableChecked] = useState(false);
  
    let [providers, setProviders] = useState([
        [0, "John A.", 3, 2, 1, 2],
        [1, "Serena B.", 4, 3, 4, 2],
        [2, "Tom C.", 2, 2, 1, 2],
    ]);
    
    function increaseCount(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        if(!countChecked){
            newProviders[index][2] = newProviders[index][2] + 1;
            setCountChecked(true);
        }
        else{
            newProviders[index][2] = newProviders[index][2] - 1;
            setCountChecked(false);
        }
        setProviders(newProviders);
    }

    function increaseEquitable(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        if(!equitableChecked){
            newProviders[index][3] = Math.min(newProviders[index][3] + 1, newProviders[index][2]);
            setEquitableChecked(true);

                }
        else{
            newProviders[index][3] = Math.min(newProviders[index][3] - 1, newProviders[index][2]);
            setEquitableChecked(false);
        }
        setProviders(newProviders);

    }

    function increaseKnowledge(index) {
        // console.log(index);
        let newProviders = [...providers];
        if(!knowledgeChecked){
        // console.log(newProviders[index][2]);
            newProviders[index][4] = Math.min(newProviders[index][4] + 1, newProviders[index][2]);
            setKnowledgeChecked(true);
        }
        else{
            newProviders[index][4] = Math.min(newProviders[index][4] - 1, newProviders[index][2]);
            setKnowledgeChecked(false);
        }
        setProviders(newProviders);

    }

    function increaseCompassion(index) {
        // console.log(index);
        let newProviders = [...providers];
        // console.log(newProviders[index][2]);
        if(!compassionChecked){
            newProviders[index][5] = Math.min(newProviders[index][5] + 1, newProviders[index][2]);
            setCompassionChecked( true);
        }
        else{
            newProviders[index][5] = Math.min(newProviders[index][5] - 1, newProviders[index][2]);
            setCompassionChecked( false);
        }
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
            <br></br>

            <h1 style={{textAlign: "center"}}>Patient Portal</h1>
            <div style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
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
                <h2 style={{textAlign: "center"}}>Add a provider:</h2>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <input type="text" id="name1" placeholder='Name'></input>
                    <button type="submit" onClick={() => registerNewProvider(document.getElementById("name1").value)}>Submit.</button>
                </div>
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