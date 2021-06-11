import React, { useEffect, useState} from 'react'
import InfoContainer from './InfoContainer'
import PostContainer from './PostContainer'
import styles from '../styles/PostPicture.css'

function Profile({ user }) {
    const [posts, setPosts] = useState([]);
    const [profileFollowers, setProfileFollowers ] = useState([]);
    const [profileFollowings, setProfileFollowings ] = useState([]);
    const [profileUser, setProfileUser ] = useState("");

    useEffect(() => {
        profileUserFetch()
    }, [])



    const profileUserFetch = () => {
        const profileId = window.location.pathname.split('/')[2]
        const configObj = {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`,
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        }
        fetch(`http://localhost:3000//users/${profileId}/profile`, configObj)
            .then(resp => resp.json())
            .then(profile => {
                setPosts(profile.posts)
                setProfileUser(profile.user)
                setProfileFollowers(profile.user.followers)
                setProfileFollowings(profile.user.followings)
                // determineButtonEditOrFollowButtons()
            })
    }
    // console.log("this user is following:", profileFollowings)
    // console.log("this users followers are:", profileFollowers)


    return (
        <div className="profile-page">
            <InfoContainer
                user={user}
                posts={posts}
                profileUser={profileUser}
                profileFollowers={profileFollowers}
                profileFollowings={profileFollowings}
                setProfileFollowings={setProfileFollowings}
                profileUserFetch={profileUserFetch}
            />
            {posts ? 
                <PostContainer
                    posts={posts}
                    user={user}
                />
            : 
            null
            }
        </div>
    )
}

export default Profile
