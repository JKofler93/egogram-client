import React, { useState } from "react";
import styles from '../styles/LoginStyles.css';
import { NavLink, useHistory } from 'react-router-dom';


function SignUp() {
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile_image, setProfileImage] = useState(null);
    const history = useHistory()

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
        .catch(error => console.log(error))
    }
    
    return (
        <div className="container">
            <div className="box">
                <div className="heading"><h1>Egogram</h1></div>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <input 
                                className="username"
                                placeholder="Username"
                                type="text"
                                // value={email}
                                onChange={e => setUsername(e.target.value)}
                            />
                            <label htmlFor="username">Username</label>
                        </div>
                        <div className="field">
                            <input 
                                placeholder="Bio"
                                type="text"
                                // value={email}
                                onChange={e => setBio(e.target.value)}
                            />
                            <label htmlFor="bio">Bio</label>
                        </div>
                        <div className="field">
                            <input 
                                placeholder="Email"
                                type="text"
                                // value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="field">
                            <input 
                                placeholder="Password"
                                type="password"
                                // value={email}
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
                                // value={profile_image}
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
