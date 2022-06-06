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
                    Щоб використовувати функціонал цього додатку вам необхідно Увійти
                </div>
                <NavLink to="auth">
                    <button>Увійти</button>
                </NavLink>
            </div>
        </div>
    )
}