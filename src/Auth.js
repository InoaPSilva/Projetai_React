import Http from "./Api"

export const IsAuthenticated = () => {
    const token = localStorage.token;
    Http.get("/tokenTest", { headers: { authorization: token } }).then((response) => {
        const { data: { Token } } = response;
        console.log(Token)
    }).catch((response) => {
        console.log('Error');   
    })
}