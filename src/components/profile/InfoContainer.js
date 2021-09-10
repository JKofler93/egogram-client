import React from 'react'
import styles from '../styles/InfoContainer.css'
import { useEffect } from 'react'

function InfoContainer({ user, posts, profileUser, profileFollowers, profileFollowings, setProfileFollowings, profileUserFetch, isOpen, setIsOpen }) {
    const { 
        username,
        bio,
        profile_image,
    } = profileUser;

    useEffect(() => {
        determineButtonEditOrFollowButtons()
    }, [])


    const determineButtonEditOrFollowButtons = () => {
        const foundFollowedUser = profileFollowers.find(follow => follow.username === user.username)

        if(profileUser.id === user.id) {
            return <button className="btn profile-edit-btn" onClick={e => setIsOpen(!isOpen)}>Edit Profile</button>
        } else if (foundFollowedUser) {
            return <button onClick={determineFollowOrUnFollow} className="btn profile-edit-btn">Unfollow</button>
        } else {
            return <button onClick={determineFollowOrUnFollow} className="btn profile-edit-btn">Follow</button>
        }
    }

    const followUser = () => {
        const configObj = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ follower_id: user.id, followed_user_id: profileUser.id })
        }
        fetch(`https://egogram-api.herokuapp.com/users/${user.id}/follow`, configObj)
            .then(res => res.json())
            .then(message => {
                if(message.success) {
                    setProfileFollowings([...profileFollowings])
                    profileUserFetch()
                    determineButtonEditOrFollowButtons()
                }
            })
    }

    const unFollowUser = () => {
        const configObj = {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            },
            body: JSON.stringify({ follower_id: user.id, followed_user_id: profileUser.id })
        }
        fetch(`https://egogram-api.herokuapp.com/users/${user.id}/unfollow`, configObj)
            .then(res => res.json())
            .then(message => {
                if(message.success) {
                    setProfileFollowings([...profileFollowings])
                    profileUserFetch()
                    determineButtonEditOrFollowButtons()
                }
            })
    }

    const determineFollowOrUnFollow = (e) => {
        if (e.target.innerText === "Follow") {
            followUser()
        } else if (e.target.innerText === "Unfollow") {
            unFollowUser()
        }
    }


    return (
            <div className="container">
                <div className="profile">
                    <div className="profile-image">
                        <img src={profile_image} alt="profile-pic"/>
                    </div>
                    <div className="profile-user-settings">
                        <h1 className="profile-user-name">{username}</h1>
                        {determineButtonEditOrFollowButtons()}
                    </div>
                    <div className="profile-stats">
                        <ul>
                            <li><strong>{posts.length}</strong> posts</li>
                            <li><strong>{profileFollowers === [] ? "0" : profileFollowers.length}</strong> followers</li>
                            <li><strong>{profileFollowings === [] ? "0" : profileFollowings.length}</strong> following</li>
                        </ul>
                    </div>
                    <div className="profile-bio">
                        <p>{bio}</p>
                    </div>
                </div>
            </div>
    )
}

export default InfoContainer
