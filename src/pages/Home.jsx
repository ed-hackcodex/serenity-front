import {Container, Box} from '@mui/material';
import TopAppBar from '../components/TopAppBar';
import { useEffect, useState } from 'react'
import ButtonStack from '../components/ButtonStack';
import TextInputField from '../components/TextInputField';
import SystemOutputText from '../components/SystemOutputText';
import SystemOutputOnlyAudio from '../components/SystemOutputOnlyAudio';
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
    const [showResponseInText, setShowResponseInText] = useState(true);
    
    const handleButtonStack = () => {
        setShowButtonStack(false)
    };
    const handleShowResponseInText = () => {
        setShowResponseInText(false);
        setShowButtonStack(false);
    } 

    return (
        <>
            <TopAppBar />
            <Container sx={{paddingTop: '8vh'}}>
                { showResponseInText ? <SystemOutputText /> : <SystemOutputOnlyAudio />}
            </Container>
            <Box bottom='0' position='absolute' width='100%'>
                { showButtonStack 
                ? <ButtonStack 
                    handleButtonStack={handleButtonStack} 
                    handleShowResponseInText={handleShowResponseInText}/> 
                : <TextInputField />}
            </Box>
        </>
    );
}