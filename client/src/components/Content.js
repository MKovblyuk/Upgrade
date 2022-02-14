import React, { useContext } from "react";
import {useContentRoutes} from "../contentRoutes"
import { AuthContext } from "../context/AuthContext";

export const Content = () => {
    const {isAuthenticated} = useContext(AuthContext)
    const routes = useContentRoutes(isAuthenticated)

    return (
        <div className="Content" style={{padding: "20px", width: "100%"}}>
            {routes}
        </div>
    )
}