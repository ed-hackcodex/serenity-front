import {Stack, Button} from '@mui/material';
// import { useState } from 'react';

export default function ButtonStack(prop) {
    // const [onlyChat, setOnlyChat] = useState(true);
    // const [onlyAudio, setOnlyAudio] = useState(false);
    return (
        <Stack spacing={1} padding={2} color='inherit'>
            <Button size='large' variant='outlined' onClick={prop.handleButtonStack}>Just Chat</Button>
            <Button size='large' variant='outlined' onClick={prop.handleShowResponseInText}>Just Talk</Button>
            <Button size='large' variant='outlined' onClick={prop.handleButtonStack}>Both</Button>
        </Stack>
    );
}
