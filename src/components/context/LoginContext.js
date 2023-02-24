import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase/config"

export const LoginContext = createContext()

export const useLoginContext = () => {
    return useContext(LoginContext)
}

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        error: null
    })

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .catch((error) => {
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })  
    }

    const login = (values) => {
    
        signInWithEmailAndPassword(auth, values.email, values.password)
            .catch((error) => {
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    logged: false,
                    error: null
                })
            })
        
    }

    const register = (values) => {

        createUserWithEmailAndPassword(auth, values.email, values.password)
            .catch((error) => {
                console.log(error)
                setUser({
                    email: null,
                    logged: false,
                    error: error.message
                })
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    email: user.email,
                    logged: true,
                    error: null
                })
            } else {
                logout()
            }
        })
    }, []) 

    return (
        <LoginContext.Provider value={{googleLogin, user, login, logout, register}}>
            {children}
        </LoginContext.Provider>
    )
}