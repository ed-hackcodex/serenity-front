import { AppBar, Container, Toolbar, Box, Button} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import { useEffect } from 'react'

import QuestionnairesService from '../services/Questionnaires'

export default function Home() {
    useEffect(() => {
        async function getQuestionnaires() {
            try {
                const questionnaires = await QuestionnairesService.get()
                console.log(questionnaires)
            } catch (error) {
                console.log(error)
            }
        }
        getQuestionnaires()
    }, []) 

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