import React, {useState} from 'react';
import './Patients.css';


import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  function Providers(props) {
    const [showStats, changeShowStats] = useState(false);
    const [showErr, changeShowErr] = useState(false);
    let [providerIndex, setProviderIndex] = useState(props.providers.length);

    function submitClick(){
        if(document.getElementById("inputBox").value == ""){
            changeShowErr(true);
            return;
        }

        // add this provider to the list of providers
        let found = false;
        for(let i = 0; i < props.providers.length; i++){
            if(props.providers[i][1] == document.getElementById("inputBox").value){
                // provider is present, no need to change, just display values
                found = true;

                props.setProviderIndex(i); // update the provider's index

                break;
            }
        }
        if(!found){
            // add this provider to the list
            let newPropsProviders = [...props.providers];

            newPropsProviders.push([props.providers.length, document.getElementById("inputBox").value, 0, 0, 0, 0, false, false, false, false]);
            console.log(document.getElementById("inputBox").value);
            props.setProviders(newPropsProviders);
        }

        changeShowErr(false);
        changeShowStats(true);
    }

    return (
        <>
        <text className='errMsg' style={{display: showErr ? 'block': 'none'  }}>Please enter your name!</text>
        <br/><br/><br/><br/>
        <h1 name="preSubmit" className='headingProviders' style={{display: showStats ? 'none': 'block'  }}>Enter your name:</h1>
        <div className='center' style={{display: showStats? 'none': 'block' }}>
        <input id="inputBox" style={{display: showStats? 'none': 'block'  }}></input><br/><br/>
        <button name="preSubmit" className='button' style={{display: showStats? 'none': 'block'  }} onClick={() => submitClick()} >Submit</button>
        </div>

        <h1 className='headingProviders' style={{display: showStats? 'block': 'none' }}>Your Reviews:</h1>
    <div className="ratingsContainer" style={{display: showStats? 'block': 'none' }}>
        <div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none' }} >
            <text>Knowledge</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none'}}>
            <text >1</text>
        </div>
        </div>
        <div>
        <br/><br/><div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text>Compassion</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text >2</text>
        </div>
        </div>
        <div>
        <br/><br/><div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text>Equitability</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text >3</text>
        </div>
        </div>
        
    </div>
    <div className="buttonProviderMainPg">
    <Link to="/">
        <button className='button'>Main Page</button>
    </Link> 
    </div>
    </>
    );
}
export default Providers;