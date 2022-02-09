import "../../css/skills/skill.css"
import { ProgressBar } from "./ProgressBar"

export const Skill = ({skill}) => {
    return (
        <div className="Skill">
            Name: {skill.name} <br/>
            <ProgressBar value={skill.achievedPoints} currentLevel={skill.level}/>
        </div>
    )
}