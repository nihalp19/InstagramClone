import React, { useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext()
export default UserContext

export const UserContextProvider = ({ children }) => {
    const [caption, setCaption] = useState(false)
    const [createPost, setCreatePost] = useState(false);
    return (
        <UserContext.Provider value={{ caption,createPost, setCaption,setCreatePost }}>
            {children}
        </UserContext.Provider>
    )
}