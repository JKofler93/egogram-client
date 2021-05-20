import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'

function Home({ user }) {
    const [currentUser, setCurrentUser] = useState(user)
    const [homePosts, setHomePosts] = useState([])

// console.log(currentUser.id)
    useEffect(() => {
        getHomePosts()
    }, [])

    const getHomePosts = () => {
        const configObj = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        }
        fetch(`http://localhost:3000/users/${currentUser.id}/home`, configObj)
            .then(res => res.json())
            .then(posts => {
                // console.log(posts)
                console.log(posts.posts)
                setHomePosts(posts.posts)
                console.log(homePosts)
            })
        }
        
        const postsArray = homePosts.map(post => <PostContainer key={post.id} post={post}/>)
    console.log(homePosts)
    
    return (
        <div className="post-container">
            {postsArray}
        </div>
    )
}

export default Home
