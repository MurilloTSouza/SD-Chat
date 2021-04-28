import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

const styles = {
    wrapper: {
        display: 'flex',
        minHeight: '100%'
    },

    form: {
        display: 'inline-flex',
        flexDirection: 'column',

        margin: 'auto',
        padding: '32px',

        backgroundColor: 'white',
        borderRadius: '4px',
        boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)'
    }
}

export default function LoginForm({onSubmit}) {

    const [email, setEmail] = useState("");

    let handleInputChange = (event) => {
        setEmail(event.target.value);
    }

    let handleSubmit = () => {
        onSubmit(email);
    }

    return (
        <div className="LoginForm" style={styles.wrapper}>
            <div className="form" style={styles.form}>
                <TextField
                    value={email} 
                    onChange={handleInputChange}
                    variant="filled" label="Email"
                    style={{marginBottom: '24px'}}
                />

                <Button 
                    onClick={handleSubmit}
                    variant="contained" color="primary">
                    Login
                </Button>
            </div>
        </div>
    )
}
