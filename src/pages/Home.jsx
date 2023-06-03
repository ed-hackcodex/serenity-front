import { AppBar, Container, Toolbar, Box, Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react'


export default function Home() {
    return (
        <>
            <AppBar color="transparent" position='static'>
                <Toolbar>
                    <IconButton size='large'>
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <h1>Hi User!</h1>
            </Container>
            <Box>
                <Button size='large' variant='outlined'>Just Chat</Button>
                <Button size='large' variant='outlined'>Just Talk</Button>
                <Button size='large' variant='outlined'>Both</Button>
            </Box>
        </>
    );
}