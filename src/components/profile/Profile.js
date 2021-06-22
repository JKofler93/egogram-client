import React, { useEffect, useState} from 'react'
import InfoContainer from './InfoContainer'
import PostContainer from './PostContainer'
import UserForm from './UserForm'
import styles from '../styles/PostPicture.css'

function Profile({ user, setUser }) {
    const [posts, setPosts] = useState([]);
    const [profileFollowers, setProfileFollowers ] = useState([]);
    const [profileFollowings, setProfileFollowings ] = useState([]);
    const [profileUser, setProfileUser ] = useState("");

    // References UserForm for Edit Profile button to show UserForm
    const [isOpen, setIsOpen] = useState(false)

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
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {isOpen ? (
                <div className="user-form-div">
                    <UserForm
                        user={user}
                        setUser={setUser}
                        profileUserFetch={profileUserFetch}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </div>
            )
            :
                null

            }
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
