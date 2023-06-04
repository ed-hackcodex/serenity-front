import {Container, Typography, Box} from '@mui/material';
import TopAppBar from '../components/TopAppBar';
import { useEffect, useState } from 'react'
import ButtonStack from '../components/ButtonStack';
import TextInputField from '../components/TextInputField';
import QuestionnairesService from '../services/Questionnaires';

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

    const [showButtonStack, setShowButtonStack] = useState(true);
    const handleButtonStack = () => {setShowButtonStack(false)};

    return (
        <>
            <TopAppBar />
            <Container sx={{paddingTop: '8vh'}}>
                <Typography variant='h2' component='div'>Hi there!</Typography>
            </Container>
            <Box bottom='0' position='absolute' width='100%'>
                { showButtonStack ? <ButtonStack handleButtonStack={handleButtonStack}/> : <TextInputField />};
            </Box>
        </>
    );
}