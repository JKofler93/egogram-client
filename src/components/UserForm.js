import React, { useState } from "react";

function UserForm() {
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
        .catch(error => console.log(error))

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Username"
                    type="text"
                    // value={email}
                    onChange={e => setUsername(e.target.value)}
                />

                <input 
                    placeholder="Bio"
                    type="text"
                    // value={email}
                    onChange={e => setBio(e.target.value)}
                />

                <input 
                    placeholder="Email"
                    type="text"
                    // value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <input 
                    placeholder="Password"
                    type="password"
                    // value={email}
                    onChange={e => setPassword(e.target.value)}
                />

                <input 
                    name="image"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    // value={profile_image}
                    onChange={e => setProfileImage(e.target.files[0])}
                />

                <input
                    type="submit"
                />
            </form>
        </div>
    )
}

export default UserForm
