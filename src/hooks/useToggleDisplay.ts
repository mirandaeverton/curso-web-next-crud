import { useState } from "react"

export default function useToggleDisplay() {
    const [displayMode, setDisplayMode] = useState<'table' | 'form'>('table') 
    
    const displayForm = () => setDisplayMode('form')
    const displayTable = () => setDisplayMode('table')
    
    return {
        formIsVisible: displayMode === 'form',
        tableIsVisible: displayMode === 'table',
        displayForm,
        displayTable     
    }  
}