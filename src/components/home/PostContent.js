import React from 'react'
import styles from '../styles/Like.css';
import Like from './Like'
import { NavLink } from 'react-router-dom';

function PostContent({ post, user, likes, postAddLike, postRemoveLike }) {

    const {
        avatar,
        username,
        image,
        content,
        time,
    } = post
    
    return (
            <div className="card-card">
                <NavLink to={`/profile/${post.user_id}`}>
                <div className="card-header">
                    <img
                        src={avatar}
                        alt="users-img-url"
                        className="card-user-img"
                    />
                    <h4 className="card-user-name">{username}</h4>
                </div>
                </NavLink>
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
                            <NavLink exact to={`/profile/${post.user_id}`}><strong><p>{username}</p></strong></NavLink>
                            <p>{content}</p>
                        </div>
    
                    <div className="post-time">
                        <p>{time}</p>
                    </div>
            </div>
    )
}

export default PostContent
