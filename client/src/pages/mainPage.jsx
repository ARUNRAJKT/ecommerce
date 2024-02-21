import React from "react";
import UserView from "../components/userView";
import Navbar from "../components/navBar";
export default function MainPage(){
    return(
        <React.Fragment>
            <Navbar/>
            <UserView/>
        </React.Fragment>
    )
  
}