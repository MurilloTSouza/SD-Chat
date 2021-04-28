import React from 'react'
import { Typography } from '@material-ui/core';

import './Messages.css'

export default function Messages({messages, user}) {

    let renderMessage = (message) => {
        const { sender, content, timestamp } = message;
        const myMessage = user === message.sender;

        return (
            <div className={myMessage? "message right" : "message"}
                key={timestamp} >

                <Typography 
                    variant="caption" 
                    color="textSecondary">
                    {sender}
                </Typography>

                <div className="message-content">     
                    <Typography compoenent="p">
                        {content}
                    </Typography>
                </div>

                <Typography 
                    variant="caption" 
                    color="textSecondary">
                    {timestamp}
                </Typography>

            </div>
        );
    };

    return (
        <div className="Messages">
            {messages.map(msg => renderMessage(msg))}
        </div>
    )
}
