import React, { useState } from 'react'
import styles from '../styles/UserFormStyles.css'

function UserForm({ user, setUser, profileUserFetch, setIsOpen, isOpen }) {
    const [username, setUsername] = useState("")
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profile_image, setProfileImage] = useState(null);
    // console.log(user.id)
    // console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('username', username)
        formData.append('bio', bio)
        formData.append('email', email)
        formData.append('password', password)
        formData.append('profile_image', profile_image);

        const configObj = {
            method: 'PATCH',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            },
            body: formData
        }

        fetch(`http://localhost:3000/users/${user.id}`, configObj)
        .then(res => res.json())
        .then(userData => {
            if (userData.user) {
                console.log("byebug", userData)
                setUser(userData.user)
                profileUserFetch()
                setIsOpen(!isOpen)
            }
        })
        .catch(error => console.log(error))
    }
    // console.log(user.user_image)

    return (
        <div className="user-form-container">

        <div className="close-container" onClick={() => setIsOpen(!isOpen)}>
            <div className="left-right" onClick={() => setIsOpen(!isOpen)}></div>
            <div className="right-left" onClick={() => setIsOpen(!isOpen)}></div>
        </div>
            <form className="user-form" onSubmit={handleSubmit}>
                <div className="input-field">
                    <input
                        // placeholder={user.username}
                        type="text"
                        // value={user.username || e.target.value}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <label htmlFor="Username">Username</label>
                </div>

                <div className="input-field">
                    <input
                        // placeholder={user.bio}
                        type="text"
                        // value={user.bio || e.target.value}
                        onChange={e => {setBio(e.target.value)}}
                    />
                    <label htmlFor="Bio">Bio</label>
                </div>
                
                <div className="input-field">
                    <input
                        // placeholder={user.email}
                        type="text"
                        // value={user.email || e.target.value}
                        onChange={e => {setEmail(e.target.value)}}
                    />
                    <label htmlFor="Email">Email</label>
                </div>

                <div className="input-field">
                    <input
                        // placeholder={user.password}
                        type="password"
                        // value={user.password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <label htmlFor="Password">Password</label>
                </div>

                <div className="input-field">
                    <input
                        // placeholder={user.profile_image}
                        className="image-input"
                        name="image"
                        type="file"
                        accept="image/*"
                        multiple={false}
                        // value={user.profile_image}
                        onChange={e => {e.target.value === null ? setProfileImage(user.profile_image) : setProfileImage(e.target.files[0])}}
                    />
                </div>

                <button className="form-submit-button" type="submit" onClick={handleSubmit}>Update Info</button>
            </form>
        </div>
    )
}

export default UserForm
