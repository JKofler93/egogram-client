import React, { useState, useEffect } from 'react';
import PostPicture from './PostPicture'
import styles from '../styles/PostPicture.css'

function PostContainer({ posts, user }) {
    
    useEffect(() => {
        renderPosts()
    })

    const sortByDate = (array) => {
        return array.sort((a,b) => {
            if (a.created_at > b.created_at) return -1;
            if (a.created_at < b.created_at) return 1;
            return 0;
        })
    }

    const renderPosts = () => {
        let postsArray = posts
        postsArray = sortByDate(postsArray)
        return postsArray.map(post => 
            <PostPicture
                post={post}
                key={post.id}
                user={user}
            />)
    }
    
    return (
        <div className="gallery">
            {renderPosts()}
        </div>
    )
}

export default PostContainer
