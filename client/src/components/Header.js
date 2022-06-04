import React, { useContext } from "react";
import Button from '@mui/material/Button';
import {NavLink} from "react-router-dom"
import "../css/header.css"
import { AuthContext } from "../context/AuthContext";
import logo from "../images/logo.png"

export const Header = () => {
    const authContext = useContext(AuthContext)

    return(
        <header>
            <div className="FirstPart">
                <NavLink to="skills">
                    <img src={logo} alt="logo" className="LogoImg"/>
                </NavLink>
                <div className="LogoText">Up</div>
            </div>

            <div className="SecondPart">
                <div className="LogoText">grade</div>
                <div>
                    <NavLink to="auth">
                        <button 
                            className="LoginBtn"
                        >
                            <div className="BtnName">Log In</div>
                        </button>
                    </NavLink>

                    <button 
                        onClick={authContext.logout} 
                        className="LogoutBtn"
                    >
                        <div className="BtnName">Log Out</div>
                    </button>
                </div>
            </div>
        </header>
    )
}