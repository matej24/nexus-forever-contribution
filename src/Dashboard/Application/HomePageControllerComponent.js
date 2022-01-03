import React from 'react';
import MainLayoutControllerComponent from "../../Common/Controllers/MainLayoutControllerComponent";

class HomePageControllerComponent extends MainLayoutControllerComponent{
    constructor() {
        super();
    }

    getPageContent(){
        return (
            <p>
                I did it :)
            </p>
        )
    }
}

export default HomePageControllerComponent;