import React, {useState} from 'react';

import {providers} from './Patients.js';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
    Link
  } from "react-router-dom";

function Providers() {
    return (
        <>
            <Link to="/">
                <button className='button'>Main Page</button>
            </Link> 


        </>



    )
}
export default Providers;
