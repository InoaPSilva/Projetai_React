import React from "react";
import { Route as ReactDOMRouteProps, Redirect } from "react-router-dom";
// import Http from "../services/Api";

const PrivateRoute = ({ isPrivate = true, component: Component, ...rest }) => {
    
    //     const token = localStorage.getItem("token");
    //     Http.defaults.headers.authorization = `${token}`;
    //     Http.get("/tokenTest").then((response) => {
    //         const { data: { auth } } = response;
    //         return auth
    //     }).catch(( err ) => {
    //         return err
    //     })

    // console.log(auth)
    // console.log(isPrivate)
    return (
        <ReactDOMRouteProps
            {...rest}
            render={(props) => (
                isPrivate === true ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
                )
            )} />
    )
}

export default PrivateRoute;