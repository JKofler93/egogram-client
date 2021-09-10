import React, { useState, useEffect } from 'react';
import Comment from '../home/Comment'
import CommentForm from './CommentForm'

function CommentsContainer({ post, user }) {
    const [comments, setComments] = useState(post.comments || [])
    const [content, setContent] = useState("");
    const [commentEditObj, setCommentEditObj] = useState("")

    useEffect(() => {
        renderComments()
    })

    const renderComments = () => {
        
        return comments.map(comment => 
            <Comment
                key={comment.id}
                comment={comment}
                user={user}
                deleteComment={deleteComment}
                editComment={editComment}
                post={post}
            />
        )
    }

    const editComment = (commentObj) => {
        setContent(commentObj.content)
        setCommentEditObj(commentObj)
    }

    const deleteComment = (commentObj) => {
        const configObj = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
        }
        fetch(`https://egogram-api.herokuapp.com/comments/${commentObj.id}`, configObj)
            .then(res => res.json())
            .then(post => {
                // console.log("im running too!!")
                setComments(post.post.comments)
                // setContent("")
            })
    }

    const submitHandler = ()  => {
        if (commentEditObj.id) {
            const updateComment = {
                content: content, 
                user_id: user.id,
                post_id: post.id
            }

            const configObj = {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(updateComment)
            }
            fetch(`https://egogram-api.herokuapp.com/comments/${commentEditObj.id}`, configObj)
                .then(res => res.json())
                .then(post => {
                    // console.log("secondFlag", post)
                    setComments(post.post.comments)
                    // setContent("")
                })
                .then(() => {
                    setContent("")
                })
        } else {
            
            const newComment = {
                content: content, 
                user_id: user.id,
                post_id: post.id
            }
            const configObj = {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(newComment)
            }
            fetch(`https://egogram-api.herokuapp.com/comments`, configObj)
                .then(res => res.json())
                .then(post => {
                    setComments(post.post.comments)
                    setContent("")
                })
        }
    }

    return (
        <div className="comment-container">
            {renderComments()}
                <CommentForm
                    content={content}
                    setContent={setContent}
                    submitHandler={submitHandler}
                />
        </div>
    )
}

export default CommentsContainer
