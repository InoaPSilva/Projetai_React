import React, { createContext, useState } from "react";
import Http from "../Api";

const Context = createContext();

function AuthPorvider({ children }) {
    const [authenticated, setAutheticaded] = useState(false);
    console.log
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
}

return (
    <Context.Provider value={{ authenticated, handleLogin }}>
        { children }
    </Context.Provider>
)

export {
    Context,
    AuthPorvider
}