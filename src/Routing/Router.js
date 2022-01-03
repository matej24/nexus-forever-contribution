import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, withRouter } from "react-router-dom";
import UrlHelper from "../Common/Helpers/UrlHelper";


import Route from "./Components/ParameterizedRoute";

import { HOME_PAGE } from "./RouteNames";
import HomePageControllerComponent from "../Dashboard/Application/HomePageControllerComponent";

const Router = () => {
    return (
        <BrowserRouter>
            <WithRouterRoutes />
        </BrowserRouter>
    );
};

export default Router;

const Routes = (props) => {
    const { location, history } = props;
    const urlHelper = UrlHelper.getInstance();

    urlHelper.setLocation(location);
    urlHelper.setHistory(history);

    return (
        <Switch>
            <Route id="home-page" path={HOME_PAGE} exact ourComponent={HomePageControllerComponent} />

        </Switch>
    );
};

Routes.propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};

const WithRouterRoutes = withRouter(Routes);
