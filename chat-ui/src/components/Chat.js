import React, { useRef, useState } from 'react'
import axios from 'axios';
import SockJSClient from 'react-stomp';
import ChatInput from './ChatInput';
import Messages from './Messages/Messages';

const styles = {
    chat: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    messages: {
        flexGrow: 1,
        overflow: 'auto'
    }
}

export default function Chat({user}) {

    const KAFKA_SOCKET_URL = "http://localhost:8080/ws-chat/";
    const KAFKA_TOPIC = "/topic/group";

    const [messages, setMessages] = useState([]);
    const messagesRef = useRef(null);

    let handleMessageReceive = (msg) => {
        setMessages(messages.concat(msg));

        let div = messagesRef.current;
        div.scrollTop = div.scrollHeight;
    }

    let handleSend = (text) => {
        let msg = {
            sender: user,
            content: text
        }

        axios.post("http://localhost:8080/api/send", msg)
            .catch(err=> { console.log("Error while sending message", err) })
    }

    return (
        <div className="Chat" style={styles.chat}>
            <SockJSClient
                url={KAFKA_SOCKET_URL}
                topics={[KAFKA_TOPIC]}
                onMessage={handleMessageReceive}
                debug={false}
            />

            <div style={styles.messages} ref={messagesRef}>
                <Messages
                    messages={messages}
                    user={user}
                />
            </div>

            <ChatInput onSend={handleSend} />
        </div>
    )
}
