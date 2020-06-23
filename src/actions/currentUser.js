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
    console.log('dispatching')
    // await dispatch(setCurrentUser(id))

    return (dispatch) => {
        dispatch(setCurrentUser(id))

    }
}

// export function recievequestions(questions) {
//     return {
//         type: RECIEVE_QUESTIONS,
//         questions
//     }
// }


// export function getInitialData() {
//     return (dispatch) => {
//         return (_getQuestions())
//             .then((questions) => {
//                 console.log(questions)
//             })
//     }
// }