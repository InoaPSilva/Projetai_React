import Http from "../Api";

export default function UserProfile() {

    (async () => {
        Http.get(`user/display/${localStorage.token}`)
            .then((response) => {
                const { data: { messege } } = response;
                console.log(messege);
            }).catch((err) => {
                console.log(err)
            })

    })()

    return (

        <></>
    )
}
