import React from 'react'
import Like from './Like'
import { NavLink } from 'react-router-dom';
import styles from '../styles/Like.css';

function PostContent({ post, user, likes, postAddLike, postRemoveLike }) {

    const {
        avatar,
        username,
        post_image,
        content,
        time,
        like_number
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
                            src={post_image}
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
                            <div className="like-number">
                                {like_number === 1 ? <p>{like_number} like</p> : <p>{like_number} likes</p>}
                            </div>
                        </div>  
                        <div className="post-content">
                            <NavLink exact to={`/profile/${post.user_id}`}><strong><p>{username}</p></strong></NavLink>
                            <p className="post-words">{content}</p>
                        </div>
    
                    <div className="post-time">
                        <p>{time}</p>
                    </div>
            </div>
    )
}

export default PostContent
