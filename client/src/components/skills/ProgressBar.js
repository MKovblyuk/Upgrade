import React from "react"
import {LinearProgress} from "@mui/material"
import "../../css/skills/progressBar.css"

export const ProgressBar = ({value, currentLevel}) => {

    return(
        <div className="ProgressBar" style={{marginTop: "10px"}}>
            <div>Lvl {currentLevel}</div>
            <LinearProgress 
                variant="determinate" 
                color="success" 
                value={value} 
                sx={{height: "12px", borderRadius: "10px", width: "90%", margin: "5px"}}
            />
            <div>Lvl {currentLevel + 1}</div>
        </div>
    )
}