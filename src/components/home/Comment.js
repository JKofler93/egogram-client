import React, { useState } from 'react'
import styles from '../styles/Comment.css'

function Comment({ comment, user, deleteComment, editComment, post }) {
    const [editor, setEditor] = useState(false)
    const { content, avatar, username } = comment


    // console.log("3", comment, content)

    const showEditButtons = () => {
        return (
            <div className="buttons-comment-buttons">
                <span className="close" onClick={() => setEditor(false)}><strong>x</strong></span>
                {comment.user_id === user.id ? <button className="comment-edit-button" onClick={() => editComment(comment)}>Edit</button> : null}
                <button className="comment-delete delete" onClick={() => deleteComment(comment)}>Delete</button>
            </div>
        )
    }

    const showEditMenu = () => {
        return (editor ? 
            showEditButtons() : 
            <h4 onClick={() => setEditor(true)}>x</h4>
        )
    }

    const decideEditMenu = () => {
        return (post.user_id === user.id || comment.user_id === user.id) ? showEditMenu() : null
    }


    return (
        <div className="comment">
            <div className="comment-words">
                <a href={`/profile/${comment.user_id}`}><img className="comment-img" src={avatar} alt="commenter"/></a>
                <a href={`/profile/${comment.user_id}`}><strong><p className="comment-content">{username}</p></strong></a>
                <p className="comment-content-words">{content}</p>
            </div>
                <div className="right-extra">
                    {decideEditMenu()}
                </div>
        </div>
    )
}

export default Comment