import React from "react";
import BaseControllerComponent from "../BaseControllerComponent";
import {Layout} from "antd";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";

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
               <HeaderComponent/>
                <Content className={`page-content ${this.getBaseContentClass()}`}>
                    <>{this.getPageContent()}</>
                </Content>
              <FooterComponent/>
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