import React from "react";
import { Route as ReactDOMRouteProps, Redirect } from "react-router-dom";
// import Http from "../services/Api";

// export default function Route({ isPrivate = true, component: Component, ...rest }){
//     const token = localStorage.getItem('token');
//     return(
//         <ReactDOMRouteProps
//         {...rest}
//         render={() => {
//             return isPrivate === !!token ? (
//                 <Component/>
//             ) : (
//                 <Redirect to={{pathname: isPrivate ? '/' : '/home'}}/>
//             )
//         }}
//         />
//     );
// }


// const PrivateRoute = ({ isPrivate, component: Component, ...rest }) => {

//     (async function TokenTest() {
//         const token = localStorage.getItem('token');
//         Http.defaults.headers.authorization = `${token}`;
//         Http.get("/tokenTest").then((response) => {
//             const {data: { auth } } = response
//         }).catch((err) => {
//             return err
//         });
//     })()
//     console.log(auth);
// return (
//     <ReactDOMRouteProps
//         {...rest}
//         render={(props) => (
//             isPrivate === auth ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
//             )
//         )} />
// )
// }

export default function Route({ isPrivate = false, component: Component, ...rest }){
    return (
        <ReactDOMRouteProps
            {...rest}
            render={(props) => (
                isPrivate === false ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
                )
            )} />
    )
}


// const Route = async ({ isPrivate = false, component: Component, ...rest }) => {
//     const token = localStorage.getItem('token');
//     Http.defaults.headers.authorization = `${token}`;
//     const response = await Http.get("/tokenTest")
//     const { data } = response;
//     console.log(data)
//     return (
//         <ReactDOMRouteProps
//             {...rest}
//             render={(props) => (
//                 isPrivate === true ? (
//                     <Component {...props} />
//                 ) : (
//                     <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
//                 )
//             )} />
//     )
// }

// export default Route;