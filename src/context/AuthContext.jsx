import { createContext, useEffect, useState } from "react";

// create context
export const AuthContext = createContext(null);


// create provider
export const AuthContextProvider = ({ children }) => {

    // set states from saved token
    const savedToken = localStorage.getItem("token");
    const savedIsLogin = (savedToken) ? true : false;

    const [isLogin, setIsLogin] = useState(savedIsLogin);
    const [token, setToken] = useState(savedToken);

    const logout = () => {
        setIsLogin(false);
        setToken(null);
        localStorage.removeItem("token");
    }



    useEffect(() => {
 
    //todo check saved token is valid or not
        
        if(token && isLogin) {
            localStorage.setItem("token", token);

        } else {
            localStorage.removeItem("token");
        }


    }, [token, isLogin]);

    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



// custom hook -> optional