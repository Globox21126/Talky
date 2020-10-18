import React from 'react'
import MessageInput from "../messageInput/MessageInput";


function mainPage() {

    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const messages  = [
        {id: "1", user: "John", content: "jestem John", time: time},
        {id: "2", user: "Doe", content: "a ja Doe", time: time}
    ];

    return (
        <div className="messages">
            {messages.map((message) => ( 
                <MessageInput key={message.id} message={message} />
             ))}
        </div>
    )
}

export default mainPage
