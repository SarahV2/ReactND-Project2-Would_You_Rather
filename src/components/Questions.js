import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import Question from './Question';

export class Questions extends Component {
    state = {
        unansweredQList: [],
        answeredQList: [],
        displayList: [],
        activeTab: 'unanswered',
    };

    handleTabChange = (e, clickedTab) => {
        // handle the change between the 'answered' and 'unanswered' tabs
        // by altering the state of the current tab and the 'displayList'

        e.preventDefault();
        const { activeTab } = this.state;
        const currentActiveTab = document.getElementById(activeTab);
        const targetTab = document.getElementById(clickedTab);

        currentActiveTab.classList.remove('activeTab');
        targetTab.classList.add('activeTab');
        let chosenList = '';
        if (clickedTab === 'unanswered') {
            chosenList = this.state.unansweredQList;
        } else {
            chosenList = this.state.answeredQList;
        }
        this.setState({
            activeTab: clickedTab,
            displayList: chosenList,
        });
    };
    componentDidMount() {
        const { questions, currentUser } = this.props;

        if (questions) {
            let allQuestions = [];
            for (let q in questions) {
                var question = questions[q];
                allQuestions.push(question);
            }

            // Get questions that have already been answered by the current user
            // and sort their list based on the timestamp of each question

            let answeredQuestionsList = allQuestions.filter(
                (question) =>
                    question.optionOne.votes.includes(currentUser.id) ||
                    question.optionTwo.votes.includes(currentUser.id)
            );

            answeredQuestionsList = answeredQuestionsList.sort((a, b) =>
                a.timestamp > b.timestamp ? -1 : 1
            );

            // Get questions that haven't been answered by the current user yet
            // and sort the list based on the questions' timestamps

            let unansweredQuestionsList = allQuestions.filter(
                (question) =>
                    !question.optionOne.votes.includes(currentUser.id) &&
                    !question.optionTwo.votes.includes(currentUser.id)
            );
            unansweredQuestionsList = unansweredQuestionsList.sort((a, b) =>
                a.timestamp > b.timestamp ? -1 : 1
            );

            this.setState({
                answeredQList: answeredQuestionsList,
                unansweredQList: unansweredQuestionsList,
                displayList: unansweredQuestionsList,
            });
        }
    }

    render() {
        const { displayList, activeTab } = this.state;
        return (
            <div className='center'>
                <Card
                    style={{
                        width: '50rem',
                        padding: '10px',
                        border: '3px solid #00ced1',
                    }}
                >
                    <h2 style={{ margin: '20px' }}>Questions </h2>
                    <div className='tabs'>
                        <div
                            id='unanswered'
                            className='questionTab activeTab'
                            onClick={(e) => this.handleTabChange(e, 'unanswered')}
                        >
                            Unanswered
            </div>
                        <div
                            id='answered'
                            className='questionTab'
                            onClick={(e) => this.handleTabChange(e, 'answered')}
                        >
                            Answered
            </div>
                    </div>
                    {displayList.map((question) => (
                        <Question
                            key={question.id}
                            question={question}
                            questionStatus={activeTab}
                        />
                    ))}
                </Card>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { currentUser, users, questions } = state;

    return {
        currentUser,
        users,
        questions,
    };
};

export default connect(mapStateToProps)(Questions);
