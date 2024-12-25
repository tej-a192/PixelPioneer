import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { toast } from "react-toastify";
export const AppContext = createContext()


const AppContextProvider = (props)=> {

    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [credit, setCredit] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const backendURL = import.meta.env.VITE_BACKEND_URL

    

    const loadCreditsData = async ()=> {
        try {
            const {data} = await axios.get(backendURL + '/api/user/credits', {headers:{token}})

            if(data.success) {
                setCredit(data.credits)
                setUser(data.user)
            }else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const generateImage = async (prompt)=> {
        try {
            const { data } = await axios.post(backendURL+'/api/generate-image', {prompt}, {headers: {token}})
            
            if(data.success) {
                loadCreditsData()
                return data.resultImage
            }
            else {
                toast.error(data.message)
                loadCreditsData()
            }


        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = ()=> {
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
    }


    const value = {
        user, setUser, showLogin, setShowLogin, backendURL,token, setToken,credit, setCredit, loadCreditsData, logout, generateImage
    }

    useEffect(()=> {
        if(token) {
            loadCreditsData()
        }
    },[token])

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider
