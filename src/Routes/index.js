import React from "react";
import { Switch, Router, Route } from 'react-router-dom';
import PrivateRoute from "./privateRoutes";
import history from '../services/History';

// Import Components
import IndexPage from "../component/page/indexPage/IndexPage";
import LoginPage from "../pages/Login";
import ProjectPage from "../component/page/ProjectPage";
import ProjectList from "../component/page/IndividualProject";
import RegisterPage from "../component/page/RegisterPage";
import UserProfile from "../component/authenticated/UserProfile";
import GuestList from "../component/page/Guests"
import NotFoundPage from "../pages/NotFound";

// Todas as rotas 
const Routes = () => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={IndexPage}  />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/projetos" component={ProjectPage} />
                <Route path="/projeto/:_id" component={ProjectList} />
                <Route path="/banca" component={GuestList} />
                <Route path="/perfil" component={UserProfile} />
                <PrivateRoute path="/a" component={ProjectPage} />
                <Route path="*" component={NotFoundPage}  />
            </Switch>
        </Router>
    )
};

export default Routes;