import { useState, useCallback, useContext } from "react"
import {useHttp} from "./http.hook"
import { AuthContext } from "../context/AuthContext";

export const useSkills = () => {
    const [skills, setSkills] = useState([])
    const {request, loading} = useHttp()
    const {token} = useContext(AuthContext)

    const getSkills = useCallback(async () => {
        console.log('in get skills in skills page')
        const data = await request("api/skills", "GET", null, {
            Authorization: `Bearer ${token}`
        })
        setSkills(data)
    }, [request, token])

    return {getSkills, skills, loading}
}