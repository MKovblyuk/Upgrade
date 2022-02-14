import React from "react";
import {Route, Routes} from "react-router-dom"
import {NotAuthorizedPage} from "./pages/NotAuthorizedPage"
import {ProfilePage} from "./pages/ProfilePage"
import {SkillsPage} from "./pages/SkillsPage"
import {TasksPage} from "./pages/TasksPage"
import {ToDoPage} from "./pages/ToDoPage"


export const useContentRoutes = (isAuthenticated) => {
    if(isAuthenticated){
        console.log("in is authenticated routes")
        return (
            <Routes>
                <Route path="profile" element={<ProfilePage/>}/>
                <Route path="skills" element={<SkillsPage/>}/>
                <Route path="tasks" element={<TasksPage/>}/>
                <Route path="todo" element={<ToDoPage/>}/>
                <Route path="/" element={<SkillsPage/>}/>
                <Route path="*" element={<SkillsPage/>}/>
            </Routes>
        )
    }

    console.log("in is simple routes")
    return (
        <Routes>
            <Route path="/" element={<NotAuthorizedPage/>}/>
            <Route path="*" element={<NotAuthorizedPage/>}/>
        </Routes>
    )
}