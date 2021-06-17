import React, { useEffect, useState } from 'react';
import PostForm from '../home/PostForm';
import Post from './Post';
import styles from '../styles/HomeStyles.css'

function Home({ user }) {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        if(user) {
            getHomePosts()
        }
    }, [user])
    

    const getHomePosts = () => {
        const configObj = {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        }
        fetch(`http://localhost:3000/users/${user.id}/home`, configObj)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts.posts)
            })
        }

        
        const sortByDate = (array) => {
            // console.log(array)
            return array.sort((a,b) => {
                if (a.created_at > b.created_at) return -1;
                if (a.created_at < b.created_at) return 1;
                return 0;
            })
        }

        const renderPosts = () => {
            let arrayOfPosts = sortByDate(posts)
            return arrayOfPosts.map(post =>
                <Post
                    key={post.id}
                    user={user}
                    post={post}
                    getHomePosts={getHomePosts}
                    renderPosts={renderPosts}
                    deletePost={deletePost}
                />
            )
        }

        const deletePost = (postObj) => {
            const configObj = {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem("token")}`,
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                },
                body: JSON.stringify(postObj)
            }
            fetch(`http://localhost:3000/posts/${postObj.id}`, configObj)
                .then(res => res.json())
                .then(postsObj => {
                    getHomePosts()
                    // renderPosts()
                    // console.log(`postsObj`, postsObj)
                    setPosts(postsObj)
                })
        }



    return (
        <div className="home">
                <PostForm
                    user={user}
                    posts={posts}
                    getHomePosts={getHomePosts}
                    setPosts={setPosts}
                />
            <div className="post-card">
                {posts.length > 0 ? renderPosts() : "Follow users"}
            </div>
        </div>
    )
}

export default Home
