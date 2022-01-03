import React from "react";
import UrlHelper from "../Common/Helpers/UrlHelper";

class BaseControllerComponent extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.urlHelper = UrlHelper.getInstance();

    }

    componentDidMount() {
        this.consumeFlashMessages();
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidUpdate() {}

    componentWillUnmount() {}

    requireAuthorization() {
        return false;
    }

    consumeFlashMessages() {}

    render() {
        return <></>;
    }
}

export default BaseControllerComponent;
