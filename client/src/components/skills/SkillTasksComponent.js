import React from "react";
import { AddTaskForm } from "../tasks/AddTaskForm";
import {TasksList} from "../tasks/TasksList"

export const SkillTasksComponent = ({tasks, owner, visible}) => {
    return visible ? 
        <div style={{backgroundColor: "orange"}}>
            <AddTaskForm owner={owner}/>
            <TasksList tasks={tasks}/>
        </div>
        : null
    
}