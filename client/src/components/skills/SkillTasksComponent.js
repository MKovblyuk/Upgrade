import React from "react";
import { AddTaskForm } from "../tasks/AddTaskForm";
import {TasksList} from "../tasks/TasksList"
import "../../css/skills/skillTaskComponent.css"

export const SkillTasksComponent = ({tasks, owner, visible}) => {
    return visible ? 
        <div className="SKillTaskComponent">
            <TasksList tasks={tasks}/>
            <AddTaskForm owner={owner}/>
        </div>
        : null
    
}