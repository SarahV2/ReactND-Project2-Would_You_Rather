import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { updateUser } from './users'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_ANSWER = 'SAVE_ANSWER'



export function recieveQuestions(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function saveAnswer(questionID, userID, answer) {
    console.log(userID)
    return {
        type: SAVE_ANSWER,
        questionID,
        answer,
        userID
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            const question = await _saveQuestion({
                optionOneText,
                optionTwoText,
                author: currentUser.id,
            })
            console.log(question)
            dispatch(addQuestion(question))
            dispatch(updateUser('questions', question.author, question.id))
        }
        catch (e) {
            alert(e)
        }
    }
}

export function handleSaveAnswer(questionID, answer) {
    return async (dispatch, getState) => {
        const { currentUser } = getState()
        try {
            await _saveQuestionAnswer({
                authedUser: currentUser.id,
                qid: questionID,
                answer
            })
            await dispatch(saveAnswer(questionID, currentUser.id, answer))
            await dispatch(updateUser('answers', currentUser.id, questionID,answer))
        }
        catch (e) {

        }
    }
}

export function getInitialQuestions() {
    return (dispatch) => {
        return (_getQuestions())
            .then((questions) => {
                dispatch(recieveQuestions(questions))
            })
    }
}