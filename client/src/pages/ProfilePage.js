import React, { useContext, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchProfile } from "../redux/actions/profileActions";
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import { UpdateProfileForm } from "../components/profile/UpdateProfileForm";

export const ProfilePage = () => {
    console.log("in profile page")
    const profile = useSelector(state => state.profileReducer.profile)
    const wasFetched = useSelector(state => state.profileReducer.wasFetched)
    const dispatch = useDispatch()
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const [updateProfileFormVisibility, setUpdateProfileFormVisibility] = useState(false)

    useEffect(() => {
        if(!wasFetched){
            console.log("fetch profile")
            dispatch(fetchProfile(request, token))
        }
    },[])

    const showUpdateProfileForm = () => {
        setUpdateProfileFormVisibility(true)
    }

    const hideUpdateProfileForm = () => {
        setUpdateProfileFormVisibility(false)
    }

    return (
        <div>
            {/* <div>image: <img src=""/></div> */}
            <div>
                Name: {profile.name}<br/>
                Description: {profile.description}<br/>
            </div>

            <button onClick={showUpdateProfileForm}>Edit</button>

            <UpdateProfileForm 
                profile={profile} 
                hideForm={hideUpdateProfileForm}
                visible={updateProfileFormVisibility}
            />
        </div>
    )
}