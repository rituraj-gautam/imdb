'use client'
import React, { useEffect } from 'react'
import {MdLightMode, MdDarkMode} from "react-icons/md"
import { useTheme } from 'next-themes'

const DarkModeSwitch = () => {
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);    
    const currentTheme = theme === 'system'? systemTheme : theme
    useEffect(() => setMounted(true), []);
  return (
    <div>
        {mounted &&
        (currentTheme === 'dark'? (
            <MdLightMode onClick={() => setTheme('light')} className="cursor-pointer text-xl hover:text-amber-300" />
        ) : (
            <MdDarkMode onClick={() => setTheme('dark')} className="cursor-pointer text-xl hover:text-amber-300" />
        ))}
    </div>
  )
}

export default DarkModeSwitch