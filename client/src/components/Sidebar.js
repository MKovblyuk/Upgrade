import React from "react";
import {NavLink} from "react-router-dom"
// import {Button, ButtonGroup} from '@mui/material';
import "../css/sideBar.css"
import profile_icon from "../images/sidebar/profile_icon.png"
import skills_icon from "../images/sidebar/skills_icon.png"
import tasks_icon from "../images/sidebar/tasks_icon.png"
import todo_icon from "../images/sidebar/todo_icon.png"

export const Sidebar = () => {
    return(
        <div className="Sidebar" style={{width: "300px"}}>

                <NavLink to="profile">
                    <button>
                        <img src={profile_icon} alt="profile_icon"/>
                        <div>Profile</div>
                    </button>
                </NavLink>

                <NavLink to="skills">
                    <button>
                        <img src={skills_icon} alt="skills_icon"/>
                        <div>Skills</div>
                    </button>
                </NavLink>

                <NavLink to="tasks">
                    <button>
                        <img src={tasks_icon} alt="tasks_icon"/>
                        <div>Tasks</div>
                    </button>
                </NavLink>

                <NavLink to="todo">
                    <button>
                        <img src={todo_icon} alt="todo_icon"/>
                        <div>Todo</div>
                    </button>
                </NavLink>
        </div>
    )
}