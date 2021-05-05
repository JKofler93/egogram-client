import React, { useState } from "react";

function PostForm() {
    const [user_id, setUserId] = useState(1)
    const [content, setContent] = useState("");
    const [post_image, setPostImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('user_id', user_id)
        formData.append('content', content);
        formData.append('post_image', post_image);

        fetch("http://localhost:3000/posts", {
            method: "POST",
            body: formData
        })
        .catch(error => console.log(error))

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

                <input
                    type="submit"
                />
            </form>
        </div>
    )
}

export default PostForm;
