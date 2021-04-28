import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

const styles = {
    wrapper: {
        display: 'flex',
        padding: '12px 24px',
        backgroundColor: 'white'
    }
}

export default function ChatInput({onSend}) {

    const [msg, setMsg] = useState("");

    let handleInputChange = (event) => {
        setMsg(event.target.value);
    }

    let handleSend = () => {
        onSend(msg);
        setMsg("");
    }

    return (
        <div className="ChatInput" style={styles.wrapper}>
            <TextField style={{flexGrow: 1}}
                value={msg} 
                onChange={handleInputChange}
                placeholder="Type your message..."
            />

            <Button style={{marginLeft: '24px'}}
                onClick={handleSend}
                variant="contained" color="primary">
                Send
            </Button>

        </div>
    )
}
