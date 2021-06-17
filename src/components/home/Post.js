import React, {useState} from 'react';
import CommentsContainer from './CommentsContainer';
import PostContent from './PostContent';
import styles from '../styles/PostStyles.css'

function Post({ user, post, getHomePosts, deletePost, renderPosts }) {
    const [likes, setLikes] = useState(post.likes || [])
    const [editor, setEditor] = useState(false)
    console.log(post)

    const postAddLike = (newLikeObj) => {

        const configObj = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify(newLikeObj)
        }
        fetch(`http://localhost:3000/posts/${newLikeObj.post_id}/like`, configObj)
            .then(res => res.json())
            .then(post => {
                getHomePosts()
                setLikes(post.post.likes)
            })
    }
    

    const postRemoveLike = (likeObj) => {
        const foundPostLike = post.likes.find(like => like.user_id === likeObj.user_id)
        const configObj = {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        }
        fetch(`http://localhost:3000/posts/${likeObj.post_id}/unlike/${foundPostLike.id}`, configObj)
            .then(resp => resp.json())
            .then(post => {
                getHomePosts()
                setLikes(post.post.likes)
            })
        // Returns the post Obj with all associated likes and comments (not with the delete post_like)
    }

    const handleClick = () => {
        deletePost(post)
    }

    const showEditButtons = () => {
        return (
            <div className="post-buttons">
                <span className="close" onClick={() => setEditor(false)}><strong>x</strong></span>
                <button className="post-delete-button" onClick={handleClick}>Delete</button>
            </div>
        )
    }

    const showEditMenu = () => {
        return (editor ?
            showEditButtons() : 
            <span onClick={() => setEditor(true)}><strong>x</strong></span>
        )
    }

    const decideEditMenu = () => {
        return post.user_id === user.id ? showEditMenu() : null
    }


    return (
        <div className="card">
            <div className="menu">
            {decideEditMenu()}
            </div>
            <PostContent
                key={post.id}
                post={post}
                user={user}
                likes={likes}
                postRemoveLike={postRemoveLike}
                postAddLike={postAddLike}
            />
            <div className="post-comments">
                <CommentsContainer
                    user={user}
                    post={post}
                />
            </div>
        </div>
    )
}

export default Post;