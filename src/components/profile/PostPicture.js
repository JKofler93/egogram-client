import React, { useHover, useEffect, useState, useRef, useCallback } from 'react'
import { CgArrowLongRightR } from 'react-icons/cg';
import styles from '../styles/PostPicture.css'

function PostPicture({ post }) {
    const [isHovered, setIsHovered] = useState(false);
    console.log(post)
    
    const { image, like_number, comment_number } = post;
    
    // const handleMouseEnter = () => setIsHovered(true);
    // const handleMouseOut = () => setIsHovered(false);
    
    
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
                    src={image} 
                    alt="post-img"

                />
            </div>
        :
            <div className="gallery-image-div">
                <img 
                    style={hoverImageStyles}
                    className="gallery-image" 
                    src={image} 
                    alt="post-img"

                />
                <div className="gallery-item-info" style={hoverInfoStyles} onMouseLeave={() => setIsHovered(false)}>
                    <ul>
                        <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="heart" aria-hidden="true">♥</i> {like_number}</li>
                        <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="comment" aria-hidden="true">💬</i> {comment_number}</li>
                    </ul>
                </div>
            </div>
        }
        </div>

    )
}

export default PostPicture
