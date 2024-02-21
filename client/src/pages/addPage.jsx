import React from "react";
import UserAdd from "../components/userAdd";
import Navbar from "../components/navBar";
export default function AddPage(){
    return(
        <React.Fragment>
            <Navbar/>
            <UserAdd/>     
        </React.Fragment>
    )
  
}