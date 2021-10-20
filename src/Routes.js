import React from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './History';

// Import Components
import IndexPage from "./component/page/indexPage/IndexPage";
import LoginPage from "./component/page/loginPage/LoginPage";
import ProjectPage from "./component/page/ProjectPage";
import RegisterPage from "./component/page/registerPage/RegisterPage";
import userProfile from "./usersPage/userProfile";

const PrivateRoute = ({ isPrivate = false, component: Component, ...rest }) => {
    const token = localStorage.getItem('token');
    return (
        <Route {...rest} render={props => (
            isPrivate === !!token ? (
                <Component { ...props} />
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
                <Route path="/perfil" component={userProfile} />
                <PrivateRoute path="/a" component={ProjectPage} />
            </Switch>
        </Router>
    )
};

export default Routes;