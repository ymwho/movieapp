import React from "react";
import { Link} from "react-router-dom";
import "./Navigation.scss";



function Navigation(){
    return (
        <div className="nav__menu">
            <Link to ="/"  className="nav__home">Home</Link>
            <Link to ="/About"  className="nav__About">About</Link>
        </div>
    )
}



export default Navigation;