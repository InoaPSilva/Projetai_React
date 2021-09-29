import Http from "./api"

export const isAuthenticated = () => {
    const token = localStorage.token
    
    console.log(localStorage.token)
    const verificaToken = () => {
        Http.get("/tokenTest", { headers: {  authorization: tokenx }}).then((response) =>{
            const data = JSON.stringify(response)
            console.log(data)
            return data
        }).catch((response) =>{
            const data = JSON.stringify(response)
            console.log(data)

            return data
        })
    }
    verificaToken()
    if(verificaToken === true) {
        return true;
    }
    else{
        return false;
    }
}