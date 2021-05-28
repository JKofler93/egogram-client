import React, { useState } from 'react';
import styles from './styles/PostStyles.css';
import CommentsContainer from './CommentsContainer';
import CommentForm from './CommentForm'

function PostContainer({ post, user }) {

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
                    <div className="post-content">
                        <strong><p>{username}</p></strong>
                        <p>{content}</p>
                    </div>
                <div className="post-time">
                    <p>{time}</p>
                </div>
                    <div className="post-comments">
                        <CommentsContainer
                            user={user}
                            post={post}
                        />
                    </div>
        </div>
    )
}

export default PostContainer
