import React, { useContext, useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { fetchProfile } from "../redux/actions/profileActions";
import {useHttp} from "../hooks/http.hook"
import {AuthContext} from "../context/AuthContext"
import { UpdateProfileForm } from "../components/profile/UpdateProfileForm";
import "../css/pages/profilePage.css"

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
        <div className="ProfilePage">
            <div className="Info">
                <div>
                    <b>Ім'я: </b>{profile ? profile.name : ""}<br/>
                </div>
                <div>
                    <b>Короткий опис: </b> {profile ? profile.description : ""}<br/>
                </div>
                <div>
                    <b>Захоплення: </b> {profile ? profile.hobby : ""}<br/>
                </div>           
            </div>

            <button onClick={showUpdateProfileForm}>Редагувати</button>

            <UpdateProfileForm 
                profile={profile} 
                hideForm={hideUpdateProfileForm}
                visible={updateProfileFormVisibility}
            />
        </div>
    )
}