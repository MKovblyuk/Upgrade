import React from "react";
import { NavLink } from "react-router-dom";
import "../css/pages/notAuthorizedPage.css";
import notAuthorizedIcon from "../images/not_authorized_icon.png"

export const NotAuthorizedPage = () => {
    return (
        <div className="NotAuthorizedPage">
            <div className="Message">
                <img src={notAuthorizedIcon} alt="message_info"/>
                <div className="MessageText">
                    To use functions on this site you need to register
                </div>
                <NavLink to="auth">
                    <button>Log In</button>
                </NavLink>
            </div>
        </div>
    )
}