import { createContext, useEffect, useState } from 'react'

import ConversationService from '../services/Conversation'

const CommonDataContext = createContext({})

function CommonDataProvider({ children }) {
    const [data, setData] = useState({
        firstInteraction: null
    })

    useEffect(() => {
        async function getQuestionnaires() {
            try {
                const conversationResponse = await ConversationService.get()
                setData(values => ({ ...values, firstInteraction: conversationResponse.data[conversationResponse.data.length - 1] }))
            } catch (error) {
                console.warn('Error: Get questionnaires data: ', error)
            }
        }
        getQuestionnaires()
    }, [])

    return (
        <CommonDataContext.Provider value={data}>
            {children}
        </CommonDataContext.Provider>
    )
}

export { CommonDataContext, CommonDataProvider }