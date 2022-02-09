import React from "react";
import { SkillsList } from "../components/skills/SkillsList";
import {CircularProgress} from "@mui/material"


export const SkillsPage = ({skillsState}) => {
    return (
        <div>
            {
                skillsState.loading 
                ? 
                    <CircularProgress size={80} sx={{display: "block", margin: "0 auto", marginTop: "50px"}}/>
                : 
                    <SkillsList skills={skillsState.skills}/> 
            }
        </div>
    )
}