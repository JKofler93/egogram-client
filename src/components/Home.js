import React, { useEffect, useState } from 'react'

function Home({ user }) {
    const [currentUser, setCurrentUser] = useState(user)
    const [homePosts, setHomePosts] = useState(user)


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
        fetch(`http://localhost:3000/users/${user.id}/home`, configObj)
            .then(res => res.json())
            .then(posts => {
                console.log(posts)
                console.log(posts.posts)
                setHomePosts(posts.posts)
                console.log(homePosts)
            })
    }
    console.log(user)
    return (
        <div>
            
        </div>
    )
}

export default Home
