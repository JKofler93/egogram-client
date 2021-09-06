import React, { useState } from 'react'
import styles from '../styles/PostPicture.css'

function PostPicture({ post }) {
    const [isHovered, setIsHovered] = useState(false);
    // console.log(post)
    
    const { post_image, like_number, comment_number } = post;
    
    let hoverImageStyles = {
        filter: "brightness(50%)"
    }

    let hoverInfoStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '0',
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    }


    return (
        <div className="gallery-item" >
        { !isHovered 

        ? 
            <div className="gallery-image-div">
                <img 
                    onMouseOver={() => setIsHovered(true)}
                    className="gallery-image" 
                    src={post_image} 
                    alt="post-img"

                />
            </div>
        :
            <div className="gallery-image-div">
                <img 
                    style={hoverImageStyles}
                    className="gallery-image" 
                    src={post_image} 
                    alt="post-img"

                />
                <div className="gallery-item-info" style={hoverInfoStyles} onMouseLeave={() => setIsHovered(false)}>
                    <ul>
                        <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="heart-icon" aria-hidden="true">♥️</i> {like_number}</li>
                        <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="comment-icon" aria-hidden="true">💬</i> {comment_number}</li>
                    </ul>
                </div>
            </div>
        }
        </div>

    )
}

export default PostPicture
