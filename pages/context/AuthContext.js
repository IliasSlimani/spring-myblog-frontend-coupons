import { useContext, createContext, useState } from "react";

const AuthContext = createContext({});

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState("");

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export {useAuth, AuthProvider, AuthContext};