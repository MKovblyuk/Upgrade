import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {TasksList} from "../components/tasks/TasksList"
import "../css/tasksPage.css"

export const TasksPage = () => {
    const skills = useSelector(state => state.skillsReducer.skills)
    const [tasks, setTasks] = useState([])

    // get tasks from skills
    useEffect(() => {
        console.log("in use effect in tasksPage //////////////////////////////////////")
        let tpmTasks = []
        skills.forEach(skill => {
            skill.tasks.forEach(task => tpmTasks.push(task))
        });
        setTasks(tpmTasks)
    },[skills])

    return (
        <div className="TasksPage">
            <div className="PageName">Tasks</div>
            <TasksList tasks={tasks}/>
        </div>
    )
}