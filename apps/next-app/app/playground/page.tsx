'use client'
import React, {useState} from 'react'

type ThemeType = "dark" | "light" | "system"


const Page = () => {
    const themeOptions = ["dark", "light", "system"]
    const [theme, setTheme] = useState<ThemeType>("system")

    return (
        <>

        <ThemeOptios themeOptions={themeOptions} theme={theme} selectTheme={(theme) => setTheme(theme as ThemeType)} />
            <h1>Theme: {theme}</h1>
            {convertToArray(1)}
        </>
  )
}

type ThemeOptiosProps<T> = {
    themeOptions: T[]
    theme: T
    selectTheme: (theme: T) => void
}

const ThemeOptios = <T extends React.ReactNode>({themeOptions, theme, selectTheme}: ThemeOptiosProps<T>) => {
    return (
        <ul>
            {themeOptions.map((themeOption, idx) => (
                <li key={idx}>
                    <button onClick={() => selectTheme(themeOption)}
                        style={theme === themeOption ? { 'fontWeight': 'bold' } : { 'fontWeight': 'normal' }}>
                        {themeOption}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Page
export const convertToArray = <T extends {}>(item: T): T[] => [item];



