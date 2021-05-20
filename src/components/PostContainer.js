import React from 'react'

function PostContainer({ post }) {
    const {
        id,
        avatar,
        username,
        image,
        content,
        time
    } = post
    console.log(post)
    
    return (
        <div className="post-card">
            <img
                src={avatar}
                alt="users-img-url"
                className="users-img-url"
            />
            <h4>{username}</h4>

            <div className="post-div">
                <div className="post-img">
                    <img
                        src={image}
                        alt="post-img-url"
                        className="post-img-url"
                    />
                </div>
                <div className="post-content">
                    <h3>{content}</h3>
                </div>

                <div className="post-time">
                    <p>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default PostContainer
