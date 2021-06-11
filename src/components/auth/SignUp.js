import React, { useState } from "react";
import styles from '../styles/LoginStyles.css';
import { NavLink } from 'react-router-dom';


function SignUp({ loginUser }) {
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile_image, setProfileImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('username', username)
        formData.append('bio', bio)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('profile_image', profile_image);

        fetch("http://localhost:3000/users", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(userData => {
            if(userData.user) {
                loginUser(userData.user)
                localStorage.setItem("token", userData.jwt)
                localStorage.setItem("userId", userData.user.id)
            }
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <div className="box">
                <div className="heading"><h1>Egogram</h1></div>
                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="field">
                            <input 
                                placeholder="username"
                                className="username"
                                type="text"
                                // value={email}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="field">
                            <input
                                placeholder="bio"
                                type="text"
                                // value={email}
                                onChange={e => setBio(e.target.value)}
                            />
                            <label htmlFor="bio">Bio</label>
                        </div>
                        <div className="field">
                            <input 
                                placeholder="email"
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="field">
                            <input 
                                placeholder="password"
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="field">
                            <input 
                                name="image"
                                type="file"
                                accept="image/*"
                                multiple={false}
                                onChange={e => setProfileImage(e.target.files[0])}
                            />
                            <label htmlFor="image">Image</label>
                        </div>
                        <button 
                            className="login-button"
                        >Sign up
                        </button>
                        <div className="separator">
                            <div className="line"></div>
                                <p>OR</p>
                            <div className="line"></div>
                        </div>
                        <div className="other">
                            <p>Wanna look around?<NavLink exact to="/login"> Click Me</NavLink></p>
                            {/* <a className="forgot-password" href="#">Forgot password?</a> */}
                        </div>
                    </form>
                </div>
            <div className="box">
                    <p>Have an account? <NavLink exact to="/login">Already a Member ?</NavLink></p>
            </div>
        </div>
    )
}

export default SignUp
