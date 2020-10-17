import React from 'react'


function mainPage() {

    const messages  = [
        {user: "John", content: "Papież", time:""},
        {user: "Doe", content: "Polak", time:""}
    ];


    return (
        <div className="messages">
            {messages.map(message => 
                (<div>{message.user}: {message.content} - Time: </div>)
                )}
        </div>
    )
}

export default mainPage
