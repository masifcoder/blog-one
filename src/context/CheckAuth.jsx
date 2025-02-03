import { createContext, useState } from "react";


// create context
export const CheckAuth = createContext(null);


// context provider
export const CheckAuthProvider = ({ children }) => {

    const [isLogin, setIsLogin] = useState(false);

    return (
        <CheckAuth.Provider value={{ isLogin, setIsLogin }}>
            {children}
        </CheckAuth.Provider>
    )

}



// optional - custom hook for provider