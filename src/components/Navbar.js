import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'


function Navbar() {
    return (
        <div className="navbar">
            <div className="app-logo">
                <h1>Egogram</h1>
            </div>
            <div className="search-bar">
                <form>
                    <input/>
                </form>
            </div>
            <div className="right-side">
                <h3>Post modal</h3>
                <h3>NavLink to Home</h3> 
                <h3>NavLink to Current users profile</h3>
                <h3>NavLink to Logout</h3>
            </div>
            
        </div>
    )
}

export default Navbar
