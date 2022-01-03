import React from "react";
import { Route, withRouter } from "react-router-dom";

const ParameterizedRoute = withRouter((props) => {
    // to avoid anything from react-router-dom and its components
    const Component = props.ourComponent;
    const componentProps = props.componentProps || {};

    const match = props.computedMatch || props.match;

    // maybe cleanup props from router keys and component key?
    // extra check: is something colliding with Route component from these params to avoid default

    const cleanedPropsForRouter = {
        ...props,
    };

    const keysToDelete = ["match", "ourComponent", "componentProps", "location", "history", "computedMatch"];

    for (const key of keysToDelete) {
        if (cleanedPropsForRouter.hasOwnProperty(key)) {
            delete cleanedPropsForRouter[key];
        }
    }

    return (
        <Route {...cleanedPropsForRouter}>
            <Component {...match.params} {...componentProps} />
        </Route>
    );
});

export default ParameterizedRoute;
