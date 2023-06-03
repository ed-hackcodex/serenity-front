import { useEffect } from 'react'
import { AppBar, Container, Toolbar} from '@mui/material'
import IconButton from '@mui/material/IconButton'
import SettingsIcon from '@mui/icons-material/Settings'

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
            <AppBar color="transparent">
                <Toolbar>
                    <IconButton size='large'>
                        <SettingsIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Container>
                <h1>Hi User!</h1>
            </Container>
        </>
    );
}