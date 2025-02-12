import { createContext, useState } from "react";

// create context
export const AuthContext = createContext(null);


// create provider
export const AuthContextProvider = ({children}) => {
    const [isLogin, setIsLogin] = useState(false);
    const [token, setToken] = useState(null);

    const logout = () => {
        setIsLogin(false);
        setToken(null);
    }

    return(
        <AuthContext.Provider value={ {isLogin, setIsLogin, token, setToken, logout} }>
            {children}
        </AuthContext.Provider>
    )
}



// custom hook -> optional