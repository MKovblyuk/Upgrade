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
                        value={newProfile ? newProfile.name : ""}
                        onChange={inputHandler}
                        placeholder="Ім'я"
                        required
                    />
                    <input
                        name="description"
                        value={newProfile ? newProfile.description : ""}
                        onChange={inputHandler}
                        placeholder="Опис"
                    />
                    <input
                        name="hobby"
                        value={newProfile ? newProfile.hobby : ""}
                        onChange={inputHandler}
                        placeholder="Захоплення"
                    />
                    <div className="Buttons">
                        <button type="submit">Зберегти</button>
                        <button onClick={hideForm}>Відмінити</button>
                    </div>
                </form>
            </div>
        : null
    )
}