import Http from "../Api"

export const IsAuthenticated = () => {
    Http.get('/tokentest',
        {
            headers: { "authorization": localStorage.token }
        })
        .them(() => authorization = true )
        .catch(() => authorization = false );
}