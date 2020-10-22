import React, {useState, useEffect} from 'react'
import MessageInput from "../messageInput/MessageInput";
import database from "../../config";

function MainPage() {

    const today = new Date();
    const time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

    const [dbMessage, setDbMessage] = useState([]);

    useEffect(() => {
        database.ref("/messages").on("value", (snapshot) => {
            const firebaseMessages = snapshot.val();
            const convertedMessages = Object.entries(firebaseMessages || {}).map(([id, message]) => ({
                ...message,
                id
            })); 
            setDbMessage(convertedMessages);
        });
    }, []);

    const [text, setText] = useState("");
    const changeMessage = (e) => {
        setText(e.target.value);
    }

    const [name, setName] = useState("");
    const changeName = (e) => {
        setName(e.target.value);
    }

    const handleMessageSend = (e) => {
        e.preventDefault();

        const newMessage = {
            user: name,
            content: text,
            time: time
        }
        database.ref("/messages").push(newMessage);
        setText(prev => "");
    }

    return (
        <>
        <div>
            {dbMessage.map((message) => ( 
                <MessageInput key={message.id} message={message} />
             ))}
        </div>
        <form onSubmit={handleMessageSend} className="message__to__send">
            <input onChange={changeName} value={name}  placeholder="Name" />
            <input onChange={changeMessage} value={text}/>
            <button> SEND </button>
        </form>
        </>
    )
}

export default MainPage
