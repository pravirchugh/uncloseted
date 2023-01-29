import React, {useState} from 'react';
import logo from '../uncloset_logo.png';
import './MainPage.css';


import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";
function MainPage() {
    return (
        <>
            
            <br></br>
            <div style={{display: "flex", justifyContent: "center"}}>
                <img class="logo" src={logo}></img>
            </div>
           
            <h1 style={{textAlign: "center", fontFamily: "lora"}}>UNCLOSET</h1>
      
            <p style={{textAlign: "center"}}>Find the right doctor for you and write your own reviews!</p>

            <div className="IAmA">
                <p style={{textAlign: "center", color: "white", fontWeight: "800"}}>I AM A: </p>
                <div className="twoButtons">
                    <Link to="/patients">
                        <button className='button'>Patient</button>  
                    </Link> 
                    <Link to="/providers">
                        <button className='button'>Provider</button>  
                    </Link> 
                </div>  
            </div>
        </>
    )
}
export default MainPage;
