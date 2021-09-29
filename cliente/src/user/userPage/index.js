import React, { useEffect, useState } from "react";
import Http from "../../api";

export default function UserPage() {
    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        (async () => {
            const { data } = await Http.get('/users');

            setUsers(data);
        })();
    }, []); 
    return(
        <>
        </>
    )
}