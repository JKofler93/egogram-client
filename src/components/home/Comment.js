import React, { useState } from 'react'

function Comment({ comment, user, deleteComment, editComment, post }) {
    const [editor, setEditor] = useState(false)
    const { content, avatar, username } = comment


    // console.log("3", comment, content)

    const showEditButtons = () => {
        return (
            <div className="buttons comment-buttons">
                <span className="close" onClick={() => setEditor(false)}>X</span>
                {comment.user_id === user.id ? <button className="comment-edit edit" onClick={() => editComment(comment)}>Edit</button> : null}
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
            <div className="comment-picture">
                <img src={avatar} alt="commenter"/>
            </div>
                <div className="comment-username">
                {/* turn p tag into a tag or navLink */}
                    <strong><p>{username}</p></strong>
                </div>
                    <div className="comment-content">   
                        <p>{content}</p>
                    </div>
                        <div className="right extra">
                            {decideEditMenu()}
                        </div>
        </div>
    )
}

export default Comment