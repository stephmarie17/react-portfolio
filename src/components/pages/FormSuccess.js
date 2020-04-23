import React from 'react'

const FormSuccess = () => {
    const successStyle = {
        textAlign: 'center'
    }
    return (
        <div style={successStyle}>
            <h2>Your message was sent!</h2>
            <p><a href="https://stephaurelio.dev/" alt="Return to Homepage">Back to Home</a></p>
        </div>
    )
}

export default FormSuccess;
