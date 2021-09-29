import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import LoginComponent from './components/pages/login/Index';
import SchedulePage from './components/pages/programacao';
import BoardPage from './components/pages/banca';
import ProjetosPage from './components/pages/projetosPage';
import ParticipantesComponet from './components/pages/participantes';
import IndexPage from './components/pages/index/index';
import NotfoundComponent from './components/pages/notfound';
import RegisterPage from "./components/pages/registerPage";
import { isAuthenticated } from "./auth";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props => (
                isAuthenticated() === false ? (
                    <Redirect to={{ pathname: "/login", state: { from: props.location } }} />  
                ) : (
                    <Component {...props} />
                )
            )
            }
        />
    )
};

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/projetos" component={ProjetosPage} />
                <Route path="/participantes" component={ParticipantesComponet} />
                <Route path="/programacao" component={SchedulePage} />
                <Route path="/banca" component={BoardPage} />
                <Route path="/login" component={LoginComponent} />
                <Route path="/register" component={RegisterPage} />
                <PrivateRoute path="/test" component={() =>  <h1>asdsada</h1> } />
                <Route component={NotfoundComponent} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;