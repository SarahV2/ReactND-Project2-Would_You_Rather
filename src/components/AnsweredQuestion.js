import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { getQuestionStats } from '../utils/helperFunctions'


export default class AnsweredQuestion extends Component {


    render() {
        const { question, currentUser } = this.props

        // Get current user's answer to the currently displayed question

        let userAnswer = ''

        if (question.optionOne.votes.includes(currentUser.id)) {
            userAnswer = 'optionOne'
        }
        else if (question.optionTwo.votes.includes(currentUser.id)) {
            userAnswer = 'optionTwo'
        }

        // Icon to be placed next to the user's answer

        const icon = <i className="answeredIcon fas fa-certificate" />

        let optionOne, optionTwo
        if (userAnswer === 'optionOne') {
            optionOne = 'optionResult answered'
            optionTwo = 'optionResult'
        }
        else {
            optionOne = 'optionResult'
            optionTwo = 'optionResult answered'
        }

        // get votes and their percentages

        const questionStats = getQuestionStats(question)

        return (
            <div className='options'>
                <br />
                <h5 className='resultsTag'>Results:</h5>
                <br />
                <div className='parentQ'>
                    <h3 className='question'>Would you rather</h3>
                </div>


                <div className={optionOne}>
                    {userAnswer === 'optionOne' ? icon : ''}
                    <p>{question.optionOne.text}</p>
                    <ProgressBar now={questionStats.option1Percentage} label={`${questionStats.option1Percentage}%`} />
                    <p className='note'>{questionStats.option1Count} out of {questionStats.totalVotes} votes</p>
                </div>

                <div className={optionTwo}>
                    {userAnswer === 'optionTwo' ? icon : ''}
                    <p>{question.optionTwo.text}</p>
                    <ProgressBar now={questionStats.option2Percentage} label={`${questionStats.option2Percentage}%`} />
                    <p className='note'>{questionStats.option2Count} out of {questionStats.totalVotes} votes</p>
                </div>
            </div>
        )
    }
}
