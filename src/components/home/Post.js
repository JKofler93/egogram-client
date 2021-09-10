import React, {useState} from 'react';
import CommentsContainer from './CommentsContainer';
import PostContent from './PostContent';
import styles from '../styles/PostStyles.css'

function Post({ user, post, getHomePosts, deletePost, renderPosts }) {
    const [likes, setLikes] = useState(post.likes || [])
    const [editor, setEditor] = useState(false)
    // console.log(post)

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
        fetch(`https://egogram-api.herokuapp.com/posts/${newLikeObj.post_id}/like`, configObj)
            .then(res => res.json())
            .then(post => {
                getHomePosts()
                setLikes(post.post.likes)
                console.log("i'm being ran too!")
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
        fetch(`https://egogram-api.herokuapp.com/posts/${likeObj.post_id}/unlike/${foundPostLike.id}`, configObj)
            .then(resp => resp.json())
            .then(post => {
                getHomePosts()
                setLikes(post.post.likes)
            })
        // Returns the post Obj with all associated likes and comments (not with the delete post_like)
    }

    const showEditMenu = () => {
        return (!editor &&
            <div className="dropdown-span">
                <span onClick={() => setEditor(!true)}><strong>...</strong></span>
                    <div className="dropdown-content">
                        <p className="option-two-p" onClick={ () => deletePost(post)}><strong>Delete</strong></p>
                    </div>
            </div>

        )
    }

    const decideEditMenu = () => {
        return post.user_id === user.id ? showEditMenu() : null
    }


    return (
        <div className="card">
            {decideEditMenu()}
            <PostContent
                key={post.id}
                post={post}
                user={user}
                likes={likes}
                postRemoveLike={postRemoveLike}
                postAddLike={postAddLike}
                decideEditMenu={decideEditMenu}
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