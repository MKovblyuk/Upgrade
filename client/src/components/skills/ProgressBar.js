import {LinearProgress} from "@mui/material"
import "../../css/skills/progressBar.css"

export const ProgressBar = ({value, currentLevel}) => {

    return(
        <div className="ProgressBar">
            <div>{currentLevel}</div>
            <LinearProgress 
                variant="determinate" 
                color="success" 
                value={value} 
                sx={{height: "10px", borderRadius: "10px", width: "100%", margin: "5px"}}
            />
            <div>{currentLevel + 1}</div>
        </div>
    )
}