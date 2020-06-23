import React, { Component } from 'react'
import { connect } from 'react-redux'
export class Leaderboard extends Component {
    componentDidMount() {
        const { users } = this.props

        if (users) {
            let leaderboard = []
            for (user in users) {
                var user = users[user]
                let answersCount = Object.keys(user.answers).length
                let questionsCount = user.questions.length
                let currentUser = {
                    id: user.id,
                    name: user.name,
                    answersCount,
                    questionsCount,
                    score: (questionsCount + answersCount)
                }
                leaderboard.push(currentUser)

            }
            leaderboard = leaderboard.sort((a, b) => (a.score > b.score) ? -1 : 1)
            console.log(leaderboard)

        }
    }
    render() {
        
        return (
            <div>
                Leaderboard

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users
    };
};

export default connect(mapStateToProps)(Leaderboard)