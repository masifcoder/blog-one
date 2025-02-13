import { createContext, useState, useEffect } from "react";

// create context
export const AuthContext = createContext(null);


// create provider
export const AuthContextProvider = ({ children }) => {


    // Check localStorage for any stored values on initial load
    const savedToken = localStorage.getItem("token");
    const savedIsLogin = savedToken ? true : false;

    // State initialization based on saved values from localStorage
    const [isLogin, setIsLogin] = useState(savedIsLogin);
    const [token, setToken] = useState(savedToken);

    // Function to log out
    const logout = () => {
        setIsLogin(false);
        setToken(null);
        localStorage.removeItem("token"); // Remove the token from localStorage on logout
    };

    // Sync the token and login state with localStorage whenever they change
    useEffect(() => {
        if (isLogin && token) {
            localStorage.setItem("token", token); // Save the token to localStorage

        } else {
            localStorage.removeItem("token"); // Remove token if not logged in
            
        }
    }, [isLogin, token]);


    return (
        <AuthContext.Provider value={{ isLogin, setIsLogin, token, setToken, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



// custom hook -> optional