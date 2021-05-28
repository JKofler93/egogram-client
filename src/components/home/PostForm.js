import React, { useState } from "react";


function PostForm({ user, getHomePosts }) {
    const [content, setContent] = useState("");
    const [post_image, setPostImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user_id', user.id)
        formData.append('content', content);
        formData.append('post_image', post_image);

        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
        .then(post => {
            // setHomePosts(post.post)
            getHomePosts()
            setContent("")
            setPostImage(null)
        })
        // .then(() => {
        //     setContent("")
        //     setPostImage(null)
        // })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="Whats on your mind..."
                    type="text"
                    // value={content}
                    onChange={e => setContent(e.target.value)}
                />

                <input 
                    name="image"
                    type="file"
                    accept="image/*"
                    multiple={false}
                    // value={post_image}
                    onChange={e => setPostImage(e.target.files[0])}
                />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export default PostForm;
