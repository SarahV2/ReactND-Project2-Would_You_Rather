// import { getInitialData } from '../utils/api'
import { recieveUsers } from './users'
import { recieveQuestions } from './questions'

// import { recieveTweets } from './tweets'
// import { setAuthedUser } from './authedUser'
// import { showLoading, hideLoading } from 'react-redux-loading'


const AUTHED_ID = 'tylermcginnis'

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(recieveUsers(users))
                dispatch(recieveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
                dispatch(hideLoading())
            })
    }
}