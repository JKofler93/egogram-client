import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiAddBoxLine, RiLogoutBoxRLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg' 
import styles from '../styles/NavbarStyles.css'

function Navbar({ logoutHandler }) {

    return (
        <div className="navbar">
            <div className="app-logo">
                <h1>Egogram</h1>
            </div>
            <div className="search-bar">
                <form>
                    <input 
                        type="text"
                        placeholder="Search"
                    />
                </form>
            </div>
            <div className="navbar-icons">
                <RiAddBoxLine/>
                <NavLink to="/home"><RiHome2Line/></NavLink>
                <NavLink to="/profile"><CgProfile/></NavLink>
                <NavLink to="/login" onClick={logoutHandler}><RiLogoutBoxRLine/></NavLink>
            </div>
        </div>
    )
}

export default Navbar
