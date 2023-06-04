import { createContext, useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid'

import UserService from '../services/User'

const UserContext = createContext()

function UserProvider({ children }) {
    const [userId, setUserId] = useState(localStorage.getItem('serenity-uuid'))

    useEffect(() => {
        async function setUserUUID() {
            try {
                if (!localStorage.getItem('serenity-uuid')) {
                    const userUUID = uuid()
                    localStorage.setItem('serenity-uuid', userUUID)
                    setUserId(userUUID)
                    await UserService.create(userUUID)
                }
            } catch (error) {
                console.warn('Error: User UUID: ', error)
            }
        }
        setUserUUID()
    }, [userId])

    return (
        <UserContext.Provider value={userId}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }
