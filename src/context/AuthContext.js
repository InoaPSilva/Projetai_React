import React, { createContext, useState } from "react";
import { useCallback } from "react";
import Http from "../services/Api";

const Context = createContext();

const AuthPorvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState([]);

    async function handleLogin() {
        const { data: { token } } = await Http.post("/user/login")
            .then((token) => {
                localStorage.setItem('token', token);
                Http.defaults.headers.authorization = `${token}`;
                setAutheticaded(true);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const signIn = useCallback(async ({ username, password }) => {
        const response = await await Http.post('', username, password)
        const { token } = response.data;
        localStorage.setItem('token', token);
        Http.defaults.headers.authorization = `${token}`;
        setAutheticaded(true);
    }, []);

    const signOut = useCallback(() => {
        localStorage.removeItem('@DeliveryBurguer:token');
    }, [])

    return (
        <Context.Provider value={{ signIn, signOut, authenticated, handleLogin }}>
            {children}
        </Context.Provider>
    )
}


export default AuthPorvider