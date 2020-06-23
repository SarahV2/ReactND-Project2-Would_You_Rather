import { _getQuestions } from '../utils/_DATA'
export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'



export function recieveUsers(questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}


export function getInitialData() {
    return (dispatch) => {
        return (_getQuestions())
            .then((questions) => {
                console.log(questions)
            })
    }
}