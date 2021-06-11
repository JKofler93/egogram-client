import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome2Line, RiHome2Fill, RiLogoutBoxRLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg' 
import styles from '../styles/NavbarStyles.css'


function Navbar({ logoutHandler, user }) {
    const [search, setSearch] = useState([])
    const [usersArray, setUsersArray] = useState([])
    const [suggestedUsers, setSuggestedUsers] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])
    // Gets user from db for search bar
    const fetchUsers = () => {
        const configObj = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        }
        fetch('http://localhost:3000/users', configObj)
            .then(resp => resp.json())
            .then(users => setUsersArray(users))
    }

    
    const getUsername = (user) => {
        return `${user.username}`
    } 

    const handleChange = (e) => {
        e.persist()
        setSearch(e.target.value)
            let listOfUsers = usersArray
            let suggestions = []
            if (search.length > 0) {
                suggestions = listOfUsers.filter(user => getUsername(user).toLowerCase().includes(search.toLowerCase()))
            }
            setSuggestedUsers(suggestions)

    }

    const handleClick = (e, userId) => {
        localStorage.setItem("userId", userId)
        setSearch(e.target.innerHTML)
    }

    const mapUsers = () => {
        return suggestedUsers.map(user =>
            <a href={`/profile/${localStorage.getItem("userId")}`}>
                <div className="search-bar-li"
                    key={user.id}
                    onClick={(e) => handleClick(e, user.id)}
                >   
                    <p>{`${user.username}`}</p>
                </div>
            </a>)
    }

    const renderSuggestions = () => {
        if(suggestedUsers.length === 0) {
            return null
        } else {
            return (
                <div className="search-ul">
                    {mapUsers()}
                </div>
            )
        }
    }
    


    return (
        <div className="navbar">
            <div className="app-logo">
                <h1 className="egogram-title">Egogram</h1>
            </div>
            <div className="search-bar">
                <form className="search-form">
                    <input
                        type="text"
                        name="search"
                        value={search}
                        placeholder="Search..."
                        onChange={handleChange}
                    />
                    {renderSuggestions()}
                </form>
            </div>
            <div className="navbar-icons">
                <NavLink to="/home"><RiHome2Line style={{color: 'black'}}/></NavLink>
                <NavLink to={`/profile/${user.id}`}><CgProfile style={{color: 'black'}}/></NavLink>
                <NavLink to="/login" onClick={logoutHandler}><RiLogoutBoxRLine style={{color: 'black'}}/></NavLink>
            </div>
        </div>
    )
}

export default Navbar
