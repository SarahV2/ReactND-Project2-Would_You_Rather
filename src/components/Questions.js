import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'react-bootstrap'

export class Questions extends Component {
    state = {
        allQuestions: [],
        unansweredQList: [],
        answeredQList: [],
        displayList: [],
        activeTab: 'unanswered'
    }

    handleTabChange = (e, clickedTab) => {
        e.preventDefault();
        console.log(clickedTab)
        const { activeTab } = this.state
        const currentActiveTab = document.getElementById(activeTab)
        const targetTab = document.getElementById(clickedTab)

        currentActiveTab.classList.remove('activeTab')
        targetTab.classList.add('activeTab')
        let chosenList = ''
        if (clickedTab === 'unanswered') {
            chosenList = this.state.unansweredQList
        }
        else {
            chosenList = this.state.answeredQList
        }
        this.setState({
            activeTab: clickedTab,
            displayList: chosenList
        })





    }
    componentDidMount() {
        const { questions, currentUser } = this.props
        // Convert the "question" object that holds all objects of questions
        // to an array of objects, for easier access.

        if (questions) {
            let allQuestions = []
            for (question in questions) {
                var question = questions[question]
                allQuestions.push(question)
            }


            const answeredQuestionsList = allQuestions.filter((question) =>
                question.optionOne.votes.includes(currentUser.id) || question.optionTwo.votes.includes(currentUser.id)
            )
            //    console.log(answeredQuestionsList)

            const unansweredQuestionsList = allQuestions.filter((question) =>
                !(question.optionOne.votes.includes(currentUser.id)) && !(question.optionTwo.votes.includes(currentUser.id))
            )
            // console.log(unansweredQuestionsList)

            this.setState({
                allQuestions,
                answeredQList: answeredQuestionsList,
                unansweredQList: unansweredQuestionsList,
                displayList:unansweredQuestionsList
            })

        }


    }


    render() {
        const { currentUser, users, questions } = this.props
        //   console.log(this.props)
        //   console.log(questions)
        const { allQuestions } = this.state
        //    console.log(allQuestions)
        const { displayList } = this.state
        console.log(displayList)
        //console.log(this.props.currentUser)
        return (
            <div className='center'>
                <Card style={{ width: '50rem', padding: '10px', border: '3px solid #00ced1' }}>
                    <h2 style={{ margin: '20px' }}>Questions </h2>
                    <div className='tabs'>
                        <div id='unanswered' className='questionTab activeTab' onClick={(e) => this.handleTabChange(e, 'unanswered')}>Unanswered</div>
                        <div id='answered' className='questionTab' onClick={(e) => this.handleTabChange(e, 'answered')}>Answered</div>
                    </div>
                </Card>
            </div >
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
