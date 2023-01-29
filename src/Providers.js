import React, {useState} from 'react';
import './index.css';
import {providers} from './components/Patients.js';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  
  function Providers() {
   
    const [showStats, changeShowStats] = useState(false);
    const [showErr, changeShowErr] = useState(false);
    function submitClick(){
        if(document.getElementById("inputBox").value == ""){
            changeShowErr(true);
            return;
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
            <text>Inclusiveness</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none'}}>
            <text >1</text>
        </div>
        </div>
        <div>
        <br/><br/><div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text>Knowledge</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text >2</text>
        </div>
        </div>
        <div>
        <br/><br/><div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text>Empathy</text>
     
        </div>
        <div className="providerInfo" style={{display: showStats? 'block': 'none' }}>
            <text >3</text>
        </div>
        </div>
        
    </div>
    <div class="buttonProviderMainPg">
    <Link to="/">
        <button className='button'>Main Page</button>
    </Link> 
    </div>
        
        </>



        );
    
}
export default Providers;