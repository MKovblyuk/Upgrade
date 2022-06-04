import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AuthContext } from "../../context/AuthContext";
import { useHttp } from "../../hooks/http.hook";
import { updateProfile } from "../../redux/actions/profileActions";
import "../../css/updateForm.css"

export const UpdateProfileForm = ({profile, hideForm, visible}) => {
    const [newProfile, setNewProfile] = useState(profile)
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateProfile(request, token, newProfile))
        hideForm()
    }

    const inputHandler = (e) => {
        setNewProfile({...newProfile, [e.target.name]: e.target.value})
    }

    return(
        visible ? 
            <div className="TransparentBg">
                <form onSubmit={submitHandler} className="UpdateForm">
                    <input
                        name="name"
                        value={newProfile.name}
                        onChange={inputHandler}
                        placeholder="Name"
                        required
                    />
                    <input
                        name="description"
                        value={newProfile.description}
                        onChange={inputHandler}
                        placeholder="Description"
                    />
                    <input
                        name="hobby"
                        value={newProfile.hobby}
                        onChange={inputHandler}
                        placeholder="Hobby"
                    />
                    <div className="Buttons">
                        <button type="submit">Save</button>
                        <button onClick={hideForm}>Cancel</button>
                    </div>
                </form>
            </div>
        : null
    )
}