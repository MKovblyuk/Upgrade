import React, { useContext, useEffect } from "react";
import {useContentRoutes} from "../contentRoutes"
import { AuthContext } from "../context/AuthContext";
import { useSkills } from "../hooks/skills.hook";

export const Content = () => {
    const {getSkills, skills, loading} = useSkills()
    const {isAuthenticated} = useContext(AuthContext)
    const routes = useContentRoutes(isAuthenticated, {skills, loading})


    useEffect(() => {
        if(isAuthenticated){
            getSkills()
        }
    },[getSkills, isAuthenticated])


    return (
        <div className="Content" style={{padding: "20px", width: "100%"}}>
            {routes}
        </div>
    )
}