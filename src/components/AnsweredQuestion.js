import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'


export default class AnsweredQuestion extends Component {
    state = {

        userAnswer: ''
    }
    componentDidMount() {
        const { question, currentUser } = this.props

        let userAnswer = ''

        if (question.optionOne.votes.includes(currentUser.id)) {
            userAnswer = 'optionOne'
        }
        else {
            userAnswer = 'optionTwo'
        }
        this.setState({
            userAnswer
        })

    }

    render() {
        let content = ''
        const { question } = this.props
        const { userAnswer } = this.state
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
        content = <div className='options'>
            <br />
            <h5 className='resultsTag'>Results:</h5>
            <br />
            <div className='parentQ'>
                <h3 className='question'>Would you rather</h3>
            </div>
            {userAnswer === 'optionOne' ? icon : ''}
            <div className={optionOne}>
               
                <p>{question.optionOne.text}</p>
                <ProgressBar now={60} label={`60%`} />
            </div>

            <div className={optionTwo}>
                {userAnswer === 'optionTwo' ? icon : ''}
                <p>{question.optionTwo.text}</p>
                <ProgressBar now={40} label={`40%`} />
            </div>

        </div>;
        return (
            <div>
                {content}
            </div>
        )
    }
}