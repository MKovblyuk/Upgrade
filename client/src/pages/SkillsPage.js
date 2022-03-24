import React, { useContext, useEffect, useState } from "react";
import { SkillsList } from "../components/skills/SkillsList";
import {CircularProgress} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import {fetchSkills} from "../redux/actions/skillsActions"
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";
import { AddSkillForm } from "../components/skills/AddSkillForm";


export const SkillsPage = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const skills = useSelector(state => state.skillsReducer.skills)
    const loading = useSelector(state => state.appReducer.loading)

    useEffect(() => {
        if(!skills.length){
            console.log("dispatch skills in SkillsPage")
            dispatch(fetchSkills(request, token))
        }
    },[])

    useEffect(() => {
        // let tasks = []
        // skills.forEach(element => tasks = [...tasks, [...element.tasks]])
        // console.log("tasks in use effect", tasks)

 
    },[skills])

    
    return (
        <div>
            {
                loading 
                ? 
                    <CircularProgress size={80} sx={{display: "block", margin: "0 auto", marginTop: "50px"}}/>
                :   
                    <div>
                        <AddSkillForm/>
                        <SkillsList skills={skills}/> 
                    </div>
            }
        </div>
    )
}