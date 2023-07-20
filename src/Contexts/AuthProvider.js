import React, { createContext, useState, useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import { signOut } from "./IdReducer.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children })=>{
    const [saveUser, setSaveUser] = useState(null);
    const [showSide, setShowSide] = useState(false);
    const [onSignOut, setOnsignOut] = useState(false);
    const dispatch = useDispatch();
    const toggleSide = ()=>{
        setShowSide(!showSide)
    }
    // const logOutFunc =()=>{
    //     dispatch(signOut());
    //     setOnsignOut(!onSignOut)
    // }
    // useEffect(()=>{
    //     if(saveUser === null){
    //         localStorage.setItem("SOTWUser", JSON.stringify({name: "visitor"}))
    //         setSaveUser(JSON.parse(localStorage.getItem("SOTWUser")))
    //     }
    //     setSaveUser(JSON.parse(localStorage.getItem("SOTWUser")))
    // }, [])
    useEffect(()=>{
        setSaveUser(JSON.parse(localStorage.getItem("SOTWUser")))
    }, [onSignOut])
    return(
        <AuthContext.Provider value={{ showSide, toggleSide,}}>{children}</AuthContext.Provider>
    )
}

