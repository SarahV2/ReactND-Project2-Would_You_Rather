import {_getQuestions} from '../utils/_DATA'

export function getInitialData(){
    return(dispatch)=>{
        return(_getQuestions())
        .then((questions)=>{
            console.log(questions)
        })
    }
}