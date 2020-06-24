import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Questions extends Component {
    state = {
        allQuestions: []
    }
    componentDidMount() {
        const { questions } = this.props
        // Convert the "question" object that holds all objects of questions
        // to an array of objects, for easier access.

        if (questions) {
            let allQuestions = []
            for (question in questions) {
                var question = questions[question]
                allQuestions.push(question)
            }
            this.setState({
                allQuestions
            })
        }
    }


    render() {
        const { currentUser, users, questions } = this.props
        console.log(this.props)
        console.log(questions)
        const { allQuestions } = this.state
        console.log(allQuestions)
        //console.log(this.props.currentUser)
        return (
            <div>
                Questions
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { currentUser, questions, users } = state
    return {
        //loading: authedUser === null
        currentUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(Questions)
