import { HIDE_LOADING, SHOW_LOADING } from "../actionsTypes"

export const showLoading = () => {
    return {
        type: SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}