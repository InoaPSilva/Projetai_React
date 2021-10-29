import React from "react";
import { Switch, Router } from 'react-router-dom';
import Route from "./privateRoutes";
import history from '../services/History';

// Import Components
import IndexPage from "../component/page/indexPage/IndexPage";
import LoginPage from "../component/page/LoginPage";
import ProjectPage from "../component/page/ProjectPage";
import ProjectList from "../component/page/IndividualProject";
import RegisterPage from "../component/page/RegisterPage";
import UserProfile from "../component/authenticated/UserProfile";
import NotFoundPage from "../component/page/NotFound";

// Todas as rotas 
const Routes = () => {
    return (
        <Router history={history} >
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/projetos" component={ProjectPage} />
                <Route path="/projeto/:_id" component={ProjectList} />
                <Route path="/perfil" component={UserProfile} />
                <Route path="/a" component={ProjectPage} isPrivate />
                <Route path="*" component={NotFoundPage}  />
            </Switch>
        </Router>
    )
};

export default Routes;