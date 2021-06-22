import React from 'react';
import styles from '../styles/CommentForm.css'

function CommentForm({ content, setContent, submitHandler }) {


    const submit = (e) => {
        e.preventDefault()
        submitHandler()
    }

    return (
        <div className="comment-form">
            <form onSubmit={submit}>

                <input 
                    type="text"
                    placeholder="Add a comment..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                    className="comment-input"
                />
                
                <input
                    type="submit"
                    value="Post"
                    className="comment-submit-button"
                />

            </form>
        </div>
    )
}

export default CommentForm
