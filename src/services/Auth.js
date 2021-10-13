import Http from "../Api"

export const IsAuthenticated = () => {
    const authTest = Http.get("/tokenTest", { headers: { authorization: localStorage.token } }).then((response) => {
        const { data: { auth } } = response;
        return auth
    }).catch(() => {
        return false
    })
    authTest()
}