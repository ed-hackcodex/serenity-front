import {Stack, Button} from '@mui/material';

export default function ButtonStack(prop) {
    return (
        <Stack spacing={1} padding={2} color='inherit'>
            <Button size='large' variant='outlined' onClick={prop.handleButtonStack}>Just Chat</Button>
            <Button size='large' variant='outlined' onClick={prop.handleButtonStack}>Just Talk</Button>
            <Button size='large' variant='outlined' onClick={prop.handleButtonStack}>Both</Button>
        </Stack>
    );
}
