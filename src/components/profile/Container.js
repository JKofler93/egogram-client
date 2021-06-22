import React from 'react'
import UserFormModal from './UserForm'

function Container({ user, setUser, profileUserFetch, isOpen, setIsOpen }) {
    
    return (
        <div className="modal">
            <UserFormModal
                user={user}
                setUser={setUser}
                profileUserFetch={profileUserFetch}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    )
}

export default Container