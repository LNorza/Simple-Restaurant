import {Link} from "react-router-dom";
import logo from "../../assets/Images/Logo-icon.svg";
import {HeaderDropdown} from "../header-dropdown/header-dropdown";
import "./header.css";
import {useState} from "react";

export function Header() {
    return (
        <div className="header">
            <Link to="/home">
                <div className="logo">
                    <img src={logo} alt="simpleRestaurant" />
                    <h1>SimpleRestaurant</h1>
                </div>
            </Link>
            <div className="user">
                <HeaderDropdown />
            </div>
        </div>
    );
}

export default Header;
