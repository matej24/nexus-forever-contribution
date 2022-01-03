import React from "react";
import BaseControllerComponent from "../BaseControllerComponent";
import {Layout} from "antd";

const {Content} = Layout;

class MainLayoutControllerComponent extends BaseControllerComponent {
    constructor(props, context) {
        super(props, context);

        this.state = this.getBaseState();
    }

    getBaseState() {
        return {};
    }

    render() {
        return (
            <Layout style={{minHeight: "100%"}}>
               <p>HEADER COMPONENT</p>
                <Content className={`page-content ${this.getBaseContentClass()}`}>
                    <>{this.getPageContent()}</>
                </Content>
                <p>FOOTER COMPONENT</p>
            </Layout>
        )
    }

    getBaseContentClass() {
        return "";
    }

    getPageContent(){
        return <></>
    }
}

export default MainLayoutControllerComponent;