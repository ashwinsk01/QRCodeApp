import React from 'react';
import Button from './Button';
import Container from './Container';

const Welcome = (props) => {
    return (
        <Container>
            <h1>Welcome to the QR Code Scanner</h1>
            <p>Click the button below to start scanning QR codes</p>
            <Button onClick={props.scan}>Start Scanning</Button>
        </Container>
    )
};

export default Welcome;