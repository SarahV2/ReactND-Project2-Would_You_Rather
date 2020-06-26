import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'
import { Card } from 'react-bootstrap'
import AnsweredQuestion from './AnsweredQuestion'


class Poll extends Component {
    state = {
        questionStatus: '',
        userAnswer: '',
        error: false
    }
    componentDidMount() {
        const { questionStatus } = this.props.location

        this.setState({
            questionStatus
        })
    }

    handleChange = (e) => {
        this.setState({
            userAnswer: e.target.value
        })
    }

    handleSubmitAnswer = async (e, questionID) => {
        e.preventDefault()
        const { userAnswer } = this.state
        if (userAnswer === '') {
            this.setState({
                error: true
            })
        }
        else {
            this.setState({
                error: false
            })
            console.log(userAnswer)
            console.log(questionID)
            const l=await this.props.dispatch(handleSaveAnswer(questionID, userAnswer))
            this.setState({
                questionStatus:'answered'
            })
        }
    }
    render() {
        const { question, author } = this.props.location
        const { currentUser } = this.props
        const { questionStatus, error } = this.state

        let content = ''

        if (!question) {
            return (
                <div className="alert alert-danger" role="alert">
                    Error Loading Question
                </div>
            )
        }



        if (questionStatus === 'answered') {

            content = <AnsweredQuestion question={question} author={author} currentUser={currentUser} />

        }
        else {
            // content = <p>... {question.optionOne.text}...</p>
            content =
                <div>
                    <div className='parentQ'>
                        <h3 className='question'>Would you rather</h3>
                    </div>
                    <form onSubmit={(e) => this.handleSubmitAnswer(e, question.id)}>
                        <input type='radio' value='optionOne' name='answer' onChange={this.handleChange} />{' '}{question.optionOne.text}
                        <br />
                        <input type='radio' value='optionTwo' name='answer' onChange={this.handleChange} />{' '}{question.optionTwo.text}
                        <br />
                        <input className=' answerButton btn btn-outline-info' type='submit' />
                    </form>
                </div>
        }



        return (
            <div className='center'>
                <Card style={{ width: '50rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2 style={{ margin: '20px' }}>View Question </h2>
                    {error ? <div className="alert alert-danger" role="alert">Please Select an answer</div> : ''}
                    <div className='questionInfo'>
                        <img className='leaderboardDisplay' src={author.avatarURL} />

                        <h5>{author.name} asks:</h5>

                        <br />


                        {content}
                        <br />

                    </div>
                </Card>
            </div>

        )



    }
}
const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps)(Poll)
