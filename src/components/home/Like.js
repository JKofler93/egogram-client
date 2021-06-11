import { render } from '@testing-library/react'
import React, { useEffect, useState} from 'react'
import styles from '../styles/Like.css'

function Like({ user, post, likes, postAddLike, postRemoveLike }) {

    const decideButton = () => {
            if(likes.find(like => like.user_id === user.id)){
                return (<button className="like-button" onClick={removeLike}>❤️</button>)
            } else {
                return (<button className="like-button" onClick={addLike}>♡</button>)
            } 

        }


    const addLike = () => {
            postAddLike({user_id: user.id, post_id: post.id})

    }

    const removeLike = () => {
            postRemoveLike({user_id: user.id, post_id: post.id})
    }

    return (
        <div>
            {decideButton()}
        </div>
    )
}

export default Like
