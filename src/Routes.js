import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Components
import IndexPage from "./component/page/indexPage";
import LoginPage from "./component/page/loginPage/loginPage";
import RegisterPage from "./component/page/registerPage/registerPage";

// Todas as rotas 
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/login" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )
};
export default Routes;