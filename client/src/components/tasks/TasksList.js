import React from 'react'
import {Task} from "./Task"
import "../../css/tasks/taskList.css"

export const TasksList = ({tasks}) => {
    console.log("tasks in tasksList:",tasks)

    const tasksList = tasks.map(task => <Task key={task._id} task={task}/>)

    return (
        <div className='TasksList'>
            {tasksList}
        </div>
    )
}
