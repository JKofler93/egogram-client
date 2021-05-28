import React from 'react';

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
                <button
                    type="submit"
                >Submit</button>
            </form>
        </div>
    )
}

export default CommentForm
