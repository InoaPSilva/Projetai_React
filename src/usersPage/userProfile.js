import React, { useEffect } from "react";
import Http from "../services/Api";

export default function UserProfile() {

    useEffect(() => {
        (async () => {
            Http.get(`user/display/${localStorage.token}`)
                .then((response) => {
                    const { data: { messege } } = response;
                    console.log(messege);
                }).catch((err) => {
                    console.log(err)
                })
    
        })()
    }, [])
    

    return (

        <></>
    )
}
