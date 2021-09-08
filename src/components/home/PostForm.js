import React, { useState } from "react";
import styles from '../styles/PostForm.css'

function PostForm({ user, getHomePosts, setPosts, setClicked, clicked }) {
    const [content, setContent] = useState("");
    const [post_image, setPostImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user_id', user.id);
        formData.append('content', content);
        formData.append('post_image', post_image);

        console.log(formData)
        // debugger

        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(post => {
            console.log(post)
            setPosts(post)
            getHomePosts()
            setClicked(!clicked)
        })
    }

    return (
        <div className="post-form">
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Whats on your mind..."
                    type="text"
                    onChange={e => setContent(e.target.value)}
                />

                <input 
                    className="custom-file-input"
                    name="image"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    onChange={e => setPostImage(e.target.files[0])}
                />

                <button className="post-form-button" type="submit">Share</button>

            </form>
        </div>
    )
}

export default PostForm;
