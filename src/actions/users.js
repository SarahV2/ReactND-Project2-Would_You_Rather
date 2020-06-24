import { _getUsers } from '../utils/_DATA'
import users from '../reducers/users'

export const RECIEVE_USERS = 'RECIEVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'



export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
    }
}

export function updateUser(targetType, userID, targetID) {
    return {
        type: UPDATE_USER,
        targetType,
        userID,
        targetID
    }
}


export function getUsers() {
    return (dispatch) => {
        return (_getUsers())
            .then((users) => {
                dispatch(recieveUsers(users))
                console.log(users)
            })
    }
}
//user.questions.push(questionID)
export function handleUpdateUser(targetType, userID, targetID) {
    return (dispatch) => {
        dispatch(updateUser(targetType, userID, targetID))
    }
}
