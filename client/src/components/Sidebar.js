import React from "react";
import {NavLink} from "react-router-dom"
import {Button, ButtonGroup} from '@mui/material';
import "../css/sideBar.css"

export const Sidebar = () => {
    return(
        <div className="Sidebar" style={{width: "300px"}}>
            <ButtonGroup fullWidth={true} variant="outlined" size="large" aria-label="large button group" orientation="vertical">
                <NavLink to="profile">
                    <Button>Profile</Button>
                </NavLink>

                <NavLink to="skills">
                    <Button>Skills</Button>
                </NavLink>

                <NavLink to="tasks">
                    <Button>Tasks</Button>
                </NavLink>

                <NavLink to="todo">
                    <Button>ToDo</Button>
                </NavLink>
            </ButtonGroup>
        </div>
    )
}