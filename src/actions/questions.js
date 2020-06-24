import { _getQuestions, _saveQuestion } from '../utils/_DATA'
import { updateUser } from './users'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'


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
            //dispatch(hideLoading())
        }
        catch (e) {
            alert(e)
        }
    }
}

export function getInitialQuestions() {
    return (dispatch) => {
        return (_getQuestions())
            .then((questions) => {
                dispatch(recieveQuestions(questions))
                console.log(questions)
            })
    }
}