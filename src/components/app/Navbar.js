import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiLogoutBoxRLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg' 
import styles from '../styles/NavbarStyles.css'

function Navbar({ logoutHandler, user }) {

    return (
        <div className="navbar">
            <div className="app-logo">
                <h1>Egogram</h1>
            </div>
            <div className="search-bar">
                <form className="search-form">
                    <input
                        type="text"
                        placeholder="Search..."
                    />
                </form>
            </div>
            <div className="navbar-icons">
                <NavLink to="/home"><RiHome2Line/></NavLink>
                <NavLink to={`/profile/${user.id}`}><CgProfile/></NavLink>
                <NavLink to="/login" onClick={logoutHandler}><RiLogoutBoxRLine/></NavLink>
            </div>
        </div>
    )
}

export default Navbar
