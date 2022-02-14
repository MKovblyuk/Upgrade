import React, { useContext, useEffect, useState } from "react";
import { SkillsList } from "../components/skills/SkillsList";
import {CircularProgress} from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import {fetchSkills} from "../redux/actions/skillsActions"
import { useHttp } from "../hooks/http.hook";
import { AuthContext } from "../context/AuthContext";


export const SkillsPage = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()
    const skills = useSelector(state => state.skillsReducer.skills)
    const loading = useSelector(state => state.appReducer.loading)

    useEffect(() => {
        if(!skills.length){
            dispatch(fetchSkills(request, token))
        }
    },[request, token, dispatch, skills])

    
    return (
        <div>
            {
                loading 
                ? 
                    <CircularProgress size={80} sx={{display: "block", margin: "0 auto", marginTop: "50px"}}/>
                : 
                    <SkillsList skills={skills}/> 
            }
        </div>
    )
}