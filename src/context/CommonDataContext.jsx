import { createContext, useEffect, useState } from 'react'

import QuestionnairesService from '../services/Questionnaires'

const CommonDataContext = createContext({})

function CommonDataProvider({ children }) {
    const [data, setData] = useState({
        questionnaires: null
    })

    useEffect(() => {
        async function getQuestionnaires() {
            try {
                const questionnaires = await QuestionnairesService.get()
                setData(values => ({ ...values, questionnaires }))
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