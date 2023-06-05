import { useContext, useState } from 'react'
import { Container, Box, CircularProgress } from '@mui/material'

import TopAppBar from '../components/TopAppBar'
import ButtonStack from '../components/ButtonStack'
import TextInputField from '../components/TextInputField'
import SystemOutputText from '../components/SystemOutputText'
import SystemOutputOnlyAudio from '../components/SystemOutputOnlyAudio'

import ConversationService from '../services/Conversation'

import { CommonDataContext } from '../context/CommonDataContext'

// import Dictaphone from '../components/DictaphoneExample'

export default function Home() {
    const commonData = useContext(CommonDataContext)
    const [showButtonStack, setShowButtonStack] = useState(true)
    const [showResponseInText, setShowResponseInText] = useState(true)
    const [conversation, setConversation] = useState([])
    const [message, setMessage] = useState('Hi User, my name is Karla, your mental health companion. Do you feel like talking or just messaging?')

    const handleShowResponseInText = () => {
        setShowResponseInText(false)
        setShowButtonStack(false)
    }

    const handleGetConversation = async (message) => {
        const data = [...conversation]
        if (message) data.push(message)
        const conversationResponse = await ConversationService.get(data)
        setMessage(conversationResponse.data[conversationResponse.data.length - 1].content)
        setConversation(conversationResponse.data)
    }

    const handleButtonStack = () => {
        // document.documentElement.style.setProperty("background-image", "linear-gradient(to right, red , yellow)");
        // document.documentElement.style.setProperty("transition", "linear-gradient(to right, red , yellow)");
        setShowButtonStack(false)
        setMessage(commonData.firstInteraction.content)
        setConversation(values => [...values, commonData.firstInteraction])
    }

    return (
        !commonData.firstInteraction
            ? (
                <Box sx={{
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <CircularProgress color="inherit" size={80} />
                </Box >
            ) : <>
                <TopAppBar />
                <Container sx={{ paddingTop: '8vh' }}>
                    {showResponseInText ? <SystemOutputText text={message} /> : <SystemOutputOnlyAudio />}
                </Container>
                <Box bottom='0' position='absolute' width='100%'>
                    {showButtonStack
                        ? <ButtonStack
                            handleButtonStack={handleButtonStack}
                            handleShowResponseInText={handleShowResponseInText} />
                        : <TextInputField onSend={handleGetConversation} />}
                </Box>

            </>
    )
}