import { _getUsers } from '../utils/_DATA'
export const RECIEVE_USERS = 'RECIEVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'


export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export function updateUser(targetType, userID, targetID,answer) {
    return {
        type: UPDATE_USER,
        targetType,
        userID,
        targetID,
        answer
    }
}


export function getUsers() {
    return (dispatch) => {
        return (_getUsers())
            .then((users) => {
                dispatch(recieveUsers(users))
            })
    }
}

export function handleUpdateUser(targetType, userID, targetID) {
    return (dispatch) => {
        dispatch(updateUser(targetType, userID, targetID))
    }
}
