export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

function setCurrentUser(id) {
    return {
        type: SET_CURRENT_USER,
        id
    }
}

export function handleLogout() {
    return (dispatch) => {
        dispatch(setCurrentUser(null))
    }
}

export function handleLogin(id) {
    return (dispatch) => {
        dispatch(setCurrentUser(id))

    }
}
