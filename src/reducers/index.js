import { combineReducers } from 'redux';
import currentUser from './currentUser'
import users from './users'
import questions from './questions'
//import { loadingBarReducer } from 'react-redux-loading'


export default combineReducers({
    currentUser,
    questions,
    users
    //loadingBar:loadingBarReducer
})