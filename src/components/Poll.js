import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveAnswer } from '../actions/questions'

class Poll extends Component {

    handleSubmitAnswer = (e, answer) => {
        e.preventDefault()
        const qID = ''
        this.props.dispatch(handleSaveAnswer(qID, answer))

    }
    render() {
        const { question, questionStatus,author } = this.props.location
        console.log(question)
        console.log(questionStatus)

        if (!question) {
            //  console.log(question)
            return (
                <div className="alert alert-danger" role="alert">
                    This is a danger alert—check it out!
                </div>
            )
        }


        return (
            <div className='center'>
                <div className='questionInfo'>
                    <img className='leaderboardDisplay' src={author.avatarURL} />

                    <h5>{author.name} asks:</h5>
                    <br />
                    <h3 className='question'>Would you rather</h3>
                    <p>
                        ... {question.optionOne.text}...</p>

       
                </div>
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
