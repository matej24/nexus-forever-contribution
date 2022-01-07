import React from 'react';
import MainLayoutControllerComponent from "../../Common/Controllers/MainLayoutControllerComponent";
import RandomizerComponent from "./Components/RandomizerComponent"


class HomePageControllerComponent extends MainLayoutControllerComponent{
    constructor() {
        super();
    }

    getPageContent(){
        return (
           <RandomizerComponent />
        )
    }
}

export default HomePageControllerComponent;