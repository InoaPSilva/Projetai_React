import React, { createContext, useState } from "react";
import History from "../services/History";
import Http from "../services/Api";

export const AuthContext = createContext();

export const AuthPorvider = ({ children }) => {

    const [authenticated, setAuthenticated] = useState(false);

    async function handleLogin(user) {
        const userData = {
            email: user[0],
            password: user[1]
        }
        const { data } = await Http.post("/user/login", userData)
        const { token } = data;

        if (!token) {
            alert(data)
        }

        else {
            localStorage.setItem('token', token);
            Http.defaults.headers.authorization = `${token}`;
            setAuthenticated(true);
            History.push('/');
        }

    }

    function handleLogout() {
        setAuthenticated(false);
        localStorage.removeItem('token');
        Http.defaults.headers.Authorization = undefined;
        History.push('/');
    }

    return (
        <AuthContext.Provider value={{ handleLogin, handleLogout, authenticated }}>
            {children}
        </AuthContext.Provider>
    )
}
