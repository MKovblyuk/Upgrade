import React, { useContext } from "react";
import {useContentRoutes} from "../contentRoutes"
import { AuthContext } from "../context/AuthContext";
import "../css/content.css"

export const Content = () => {
    const {isAuthenticated} = useContext(AuthContext)
    const routes = useContentRoutes(isAuthenticated)

    return (
        <div className="Content">
            {routes}
        </div>
    )
}