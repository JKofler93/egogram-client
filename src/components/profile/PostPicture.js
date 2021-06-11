import React, { useState } from 'react'
import { CgArrowLongRightR } from 'react-icons/cg';
import styles from '../styles/PostPicture.css'

function PostPicture({ post }) {
    const [onHover, setOnHover] = useState(false)
    console.log(post)
    const hoverImageStyles = {
        filter: "brightness(50%)"
    }
    const hoverInfoStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '0',
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    }

    const { image, like_number, comment_number } = post;

    return (
        <div className="gallery-item">

        {!onHover ? 
        <>
            <div className="gallery-image-div">
                <img 
                    onMouseOver={() => setOnHover(true)}
                    className="gallery-image" 
                    src={image} 
                    alt="post-img"

                />
            </div>
        </>
        :
        <>
            <div className="gallery-image-div">
                <img 
                    style={hoverImageStyles}
                    onMouseOut={() => setOnHover(false)}
                    className="gallery-image" 
                    src={image} 
                    alt="post-img"

                />
            <div className="gallery-item-info" style={hoverInfoStyles}>
                <ul>
                    <li className="gallery-item-likes"><span className="visually-hidden"></span><i className="heart" aria-hidden="true">♥</i> {like_number}</li>
                    <li className="gallery-item-comments"><span className="visually-hidden"></span><i className="comment" aria-hidden="true">💬</i> {comment_number}</li>
                </ul>
            </div>
            </div>
        </>
        }

        </div>
    )
}

export default PostPicture
