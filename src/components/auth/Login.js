import React, { useState } from 'react';
import styles from '../styles/LoginStyles.css'
import { NavLink, useHistory } from 'react-router-dom';

function Login({ loginUser }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const history = useHistory()

    const handleUserLogin = (e) => {
        e.preventDefault()

        const formInputData = {
            username, 
            password
        }

        fetch("https://egogram-api.herokuapp.com/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInputData), 
        })
        .then(res => res.json())
        .then(userData => {
            console.log(userData)

            if(userData.user) {
                loginUser(userData.user)
                localStorage.setItem("token", userData.jwt)
                localStorage.setItem("userId", userData.user.id)
                history.push('/home')
            }
        })
    }

    const wannaLookAround = (e) => {

        const formData = {
            username: "nowayjoek",
            password: "qwerty123456"
        }

        fetch("https://egogram-api.herokuapp.com/login", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData), 
        })
        .then(res => res.json())
        .then(userData => {
            console.log(userData)

            if(userData.user) {
                loginUser(userData.user)
                localStorage.setItem("token", userData.jwt)
                localStorage.setItem("userId", userData.user.id)
                history.push('/home')
            }
        })

    }



    return (
        <div className="container">
            <div className="box">
                <div className="heading"><h1>Egogram</h1></div>
                <form onSubmit={handleUserLogin} className="login-form">
                    <div className="field">
                        <input
                            placeholder="username"
                            className="username"
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div className="field">
                        <input
                            placeholder="password"
                            className="password"
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button 
                        type="submit"
                        className="login-button"
                    >Login
                    </button>
                    <div className="separator">
                        <div className="line"></div>
                            <p>OR</p>
                        <div className="line"></div>
                    </div>
                    <div className="other">
                        <p>Wanna look around?<NavLink exact onClick={wannaLookAround} to="/home"> Click Me</NavLink></p>
                        {/* <a className="forgot-password" href="#">Forgot password?</a> */}
                    </div>
                </form>
            </div>
            <div className="box">
                    <p>Don't have an account? <NavLink exact to="/">Sign Up</NavLink></p>
            </div>
        </div>
    )
}

export default Login
