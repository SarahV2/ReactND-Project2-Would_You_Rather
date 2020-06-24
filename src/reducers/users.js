import { RECIEVE_USERS, UPDATE_USER } from '../actions/users'



export default function users(state = {}, action) {
    switch (action.type) {
        case RECIEVE_USERS:
            return {
                ...state,
                ...action.users
            }
        case UPDATE_USER:
            if (action.targetType === 'questions') {
                return {
                    ...state,
                    [action.userID]: {
                        ...state[action.userID],
                        questions: state[action.userID].questions.concat([action.targetID])
                        }
                    }
                }
            

        default:
            return state
    }
}