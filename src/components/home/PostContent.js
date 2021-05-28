import React from 'react'
import styles from '../styles/Like.css';
import Like from './Like'

function PostContent({ post, user, likes, postAddLike, postRemoveLike }) {

    const {
        avatar,
        username,
        image,
        content,
        time,
    } = post
    
    return (
            <div className="card">
                <div className="card-header">
                    <img
                        src={avatar}
                        alt="users-img-url"
                        className="card-user-img"
                    />
                    <h4 className="card-user-name">{username}</h4>
                </div>
                    <div className="post-img">
                            <img
                                src={image}
                                alt="post-img-url"
                                className="post-img-url"
                            />
                        </div>
                        <div className="like-button-div">
                            <Like 
                                user={user}
                                post={post}
                                likes={likes}
                                postAddLike={postAddLike}
                                postRemoveLike={postRemoveLike}
                            />
                        </div>
                        <div className="post-content">
                            <strong><p>{username}</p></strong>
                            <p>{content}</p>
                        </div>
    
                    <div className="post-time">
                        <p>{time}</p>
                    </div>
            </div>
    )
}

export default PostContent
