import { _getUsers } from '../utils/_DATA'

export const RECIEVE_USERS = 'RECIEVE_USERS'



export function recieveUsers(users) {
    return {
        type: RECIEVE_USERS,
        users
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
