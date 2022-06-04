import React from "react"
import { Skill } from "./Skill"
import "../../css/skills/skillsList.css"


export const SkillsList = ({skills}) => {
    console.log("skills in skills list: ", skills)

    let skillsList = null;
    
    if(skills){
        skillsList = skills.map(skill => 
            <Skill key={skill._id} skill={skill}/>
        )
    }

    return (
        <div className="SkillsList">
            {skillsList}
        </div>
    )
}