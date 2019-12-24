import React from 'react'
import Message from '../partials/Message'

const Messages = ({messages, user}) => {
    return (
        <div className='messages'>
        {messages.map((msg, i) => (
            <Message
                key={i}
                me={user.username}
                username={msg.user}
                text={msg.text}
                left={msg.left}
                joined={msg.joined}
            />
        ))}
        </div>
    )
}

export default Messages
