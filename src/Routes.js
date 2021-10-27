import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './services/History';

// Import Components
import IndexPage from "./component/page/indexPage/IndexPage";
import LoginPage from "./component/page/LoginPage";
import ProjectPage from "./component/page/ProjectPage";
import RegisterPage from "./component/page/RegisterPage";
import UserProfile from "./component/authenticated/UserProfile";
import NotFoundPage from "./component/page/NotFound";
import Http from "./services/Api";


const PrivateRoute = ({ isPrivate, component: Component, ...rest }) => {
    
    async function TokenTest() {
        const token = localStorage.getItem('token');
        Http.defaults.headers.authorization = `${token}`;
        Http.get("/tokenTest").then((response) => {
            return {data: { auth } } = response
        }).catch((err) => {
            return err
        });
    }

    var auth = TokenTest()
    console.log(auth)
    return (
        <Route
            {...rest}
            render={(props) => (
                isPrivate === auth ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
                )
            )} />
    )
}

// Todas as rotas 
const Routes = () => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/projetos" component={ProjectPage} />
                <Route path="/perfil" component={UserProfile} />
                <PrivateRoute path="/a" component={ProjectPage} isPrivate={true} />
                <Route path="*" component={NotFoundPage}  />
            </Switch>
        </Router>
    )
};

export default Routes;