import React from 'react'

function MessageInput({message}) {

    return (
        <>
            <div className="messages">
                <div className="message">{message.time} - {message.user}:</div>
                <div className="message__content">{message.content}</div>
            </div>
        </>
    )
}

export default MessageInput
