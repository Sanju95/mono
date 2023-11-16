import React, { createContext, useContext, ReactNode, useState } from 'react'


type ThemeType = {
    theme: 'dark' | 'light'
}
const AppContext = createContext()

const AppContextProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    const [theme, setTheme] = useState<ThemeType>()

    const contextValue = { count, theme, setTheme }
  return (
    <AppContext.Provider value={contextValue}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
