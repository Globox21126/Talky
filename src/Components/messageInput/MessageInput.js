import React, {useState} from 'react'

function MessageInput({message}) {


    const [text, setText] = useState("");
    const changeMessage = (e) => {
        setText(e.target.value);
    }

    const send = (e) => {
        e.preventDefault();
    

    }

    return (
        <>
            <div className="messages">
                <div className="message">{message.time} - {message.user}:</div>
                <div className="message__content">{message.content}</div>
            </div>
            <form onSubmit={send} className="message__to__send">
                <input onChange={changeMessage} value={text} />
                <button> SEND </button>
            </form>
        </>
    )
}

export default MessageInput
