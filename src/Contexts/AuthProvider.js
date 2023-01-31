import React, { createContext, useState, useEffect} from "react"

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [saveUser, setSaveUser] = useState(null);
    const [showSide, setShowSide] = useState(false)
    const toggleSide = ()=>{
        setShowSide(!showSide)
    }
    useEffect(()=>{
        setSaveUser(JSON.parse(localStorage.getItem("SOTWUser")))
    }, [])
    return(
        <AuthContext.Provider value={{saveUser, setSaveUser, showSide, toggleSide}}>{children}</AuthContext.Provider>
    )
}

